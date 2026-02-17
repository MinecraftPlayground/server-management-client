/**
 * This module contains all definitions related to Minecraft.
 * 
 * @module
 */

import type { All as AllMethods } from './methods.ts';
import type { All as AllNotifications } from './notifications.ts'


/**
 * All Minecraft definitions.
 */
export type All =
  | AllMethods
  | AllNotifications


export type { Extend } from './extend.ts'
export type * as methods from './methods.ts';
export type * as notifications from './notifications.ts';
export type * as schemas from './schemas.ts';
