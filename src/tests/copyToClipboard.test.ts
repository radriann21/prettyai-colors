import { describe, it, expect, vi, beforeEach } from 'vitest';
import * as toastModule from 'react-hot-toast';
import { copyToClipboard } from '../utils/copyToClipboard';

vi.mock('react-hot-toast', () => ({
  default: vi.fn()
}));

describe('copyToClipboard', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    (navigator.clipboard).writeText = vi.fn();
  });

  it('should copy text to clipboard and show toast with correct parameters', async () => {
    const text = 'Hello World';
    const message = 'Copied to clipboard!';
    const clipboardSpy = vi.spyOn(navigator.clipboard, 'writeText');

    copyToClipboard(text, message);

    expect(clipboardSpy).toHaveBeenCalledWith(text);
    expect(toastModule.default).toHaveBeenCalledWith(message, {
      style: {
        color: 'white',
        backgroundColor: 'green'
      },
      ariaProps: {
        role: 'status',
        'aria-live': 'assertive'
      }
    });
  });

  it('should handle clipboard write errors gracefully', async () => {
    const error = new Error('Clipboard write failed');
    vi.spyOn(navigator.clipboard, 'writeText').mockRejectedValue(error);
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    copyToClipboard('test', 'fail');

    await new Promise(process.nextTick); 
    expect(consoleErrorSpy).toHaveBeenCalledWith(error);
  });
});