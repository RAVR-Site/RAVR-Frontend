import { renderHook } from '@testing-library/react';
import { useRef } from 'react';

import { describe, it, expect, vi, beforeAll, afterEach } from 'vitest';

import { useElementSize } from './useElementSize';

// 1. Мокаем ResizeObserver (так как в jsdom его нет)
const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

describe('useElementSize', () => {
  beforeAll(() => {
    // 2. Подменяем глобальный ResizeObserver
    vi.stubGlobal('ResizeObserver', ResizeObserverMock);
  });

  afterEach(() => {
    // 3. Очищаем моки после каждого теста
    vi.clearAllMocks();
  });

  it('should return initial size {0, 0} if element is null', () => {
    const { result } = renderHook(() => useElementSize(useRef(null)));

    expect(result.current).toEqual({ width: 0, height: 0 });
  });

  it('should observe element size changes (spyOn)', () => {
    const ref = { current: document.createElement('div') };

    // Мокаем offsetWidth и offsetHeight через spyOn
    vi.spyOn(ref.current, 'offsetWidth', 'get').mockReturnValue(200);
    vi.spyOn(ref.current, 'offsetHeight', 'get').mockReturnValue(100);

    const { result } = renderHook(() => useElementSize(ref));

    expect(result.current).toEqual({ width: 200, height: 100 });
  });

  it('should update size when element dimensions change', () => {
    const div = document.createElement('div');

    document.body.appendChild(div);
    const ref = { current: div };

    // 5. Рендерим хук

    // 7. Эмулируем ПЕРВОЕ изменение размера (через подмену свойств)
    Object.defineProperty(div, 'offsetWidth', { value: 100, configurable: true });
    Object.defineProperty(div, 'offsetHeight', { value: 50, configurable: true });

    let { result } = renderHook(() => useElementSize(ref));

    expect(result.current).toEqual({ width: 100, height: 50 });

    // 8. Эмулируем ВТОРОЕ изменение размера
    Object.defineProperty(div, 'offsetWidth', { value: 200, configurable: true });
    Object.defineProperty(div, 'offsetHeight', { value: 100, configurable: true });
    
    result = renderHook(() => useElementSize(ref)).result;

    expect(result.current).toEqual({ width: 200, height: 100 });

    // 9. Убираем элемент из DOM (очистка)
    document.body.removeChild(div);
  });

  it('should disconnect ResizeObserver on unmount', () => {
    const ref = { current: document.createElement('div') };
    const { unmount } = renderHook(() => useElementSize(ref));

    unmount();

    const observerInstance = ResizeObserverMock.mock.results[0].value;

    expect(observerInstance.disconnect).toHaveBeenCalled();
  });
});