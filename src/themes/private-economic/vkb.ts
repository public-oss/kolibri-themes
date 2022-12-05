import { KoliBri } from '@public-ui/schema';
import { KOL_ICON } from '../defaults/icon';

export const VKB = KoliBri.createTheme('vkb', {
	GLOBAL:
		':host {--color-primary: #b4cf35;--color-primary-hover: #c3d95e;--color-secondary: #024589;--color-black: #202020;--font-family: Ubuntu, "Trebuchet MS", Helvetica, Arial, sans-serif;}:host {color: var(--color-black);}:host * {box-sizing: border-box;font-family: var(--font-family);}:host h1,:host h2,:host h3,:host h4,:host h5,:host h6 {margin: 0;font-family: var(--font-family);}a,button,input,option,select,summary,textarea {-ms-hyphens: auto;-webkit-hyphens: auto;hyphens: auto;letter-spacing: inherit;word-break: break-word;}a:focus,button:focus,input:focus,select:focus,summary:focus,textarea:focus {cursor: pointer;outline-color: var(--color-secondary);outline-offset: 2px;outline-style: solid;outline-width: 3px;transition: outline-offset 0.2s linear;}@keyframes spin {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}',
	'KOL-BADGE':
		':host {display: inline-block;}span {align-items: center;border-radius: 0.3125rem;display: flex;font-size: 0.875em;font-style: normal;font-weight: 700;line-height: 1.25rem;gap: 0.5rem;padding: 0.25rem 0.75rem;}',
	'KOL-BUTTON':
		'button {border: 0;margin: 0;color: var(--color-secondary);font-family: var(--font-family);padding: 0.4375rem 0.9375rem;font-weight: 600 !important;font-size: 1rem;line-height: 1.5625rem;vertical-align: middle;text-align: center;min-width: 30px;-webkit-font-smoothing: antialiased;transition: all 0.2s ease-in-out;cursor: pointer;}button.primary {background-color: var(--color-primary);}button.primary:hover {background-color: var(--color-primary-hover);}button:disabled {opacity: 0.5;cursor: not-allowed;}button > span > span {display: flex;gap: 0.25em;margin: auto;align-items: center;justify-content: center;letter-spacing: 0.75px;}button.icon-only {padding: 8px;}button.icon-only kol-icon {display: inline-block;width: 1.5em;height: 1.5em;}button.loading kol-icon {animation: spin 5s infinite linear;}',
	'KOL-ICON': KOL_ICON,
});
