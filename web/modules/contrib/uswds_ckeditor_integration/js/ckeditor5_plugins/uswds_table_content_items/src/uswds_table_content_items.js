/**
 * @file This is what CKEditor refers to as a master (glue) plugin. Its role is
 * just to load the “editing” and “UI” components of this Plugin. Those
 * components could be included in this file, but
 *
 * I.e, this file's purpose is to integrate all the separate parts of the plugin
 * before it's made discoverable via index.js.
 */
import { Plugin } from 'ckeditor5/src/core';
import UswdsTableContentItemsEditing from './uswds_table_content_items_editing';
import UswdsTableContentItemsUi from './uswds_table_content_items_ui';

export default class UswdsTableContentItems extends Plugin {
  /**
   * @inheritDoc
   */
  static get requires() {
    return [UswdsTableContentItemsEditing, UswdsTableContentItemsUi];
  }

  /**
   * @inheritDoc
   */
  static get pluginName() {
    return 'UswdsTableContentItems';
  }
}
