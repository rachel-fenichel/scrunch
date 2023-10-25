
// Note that this file has side effects (it registers extensions)
import * as Blockly from 'blockly';
import { scrunchColors } from './colors';

//override SHAPES = {HEXAGONAL: 1, ROUND: 2, SQUARE: 3, PUZZLE: 4, NOTCH: 5};

// Previously Blockly.OUTPUT_SHAPE_ROUND. TODO: Figure out what the new value is.
let ROUND = 2;
let HEXAGONAL = 1;

/**
 * Helper function that generates an extension based on a category name.
 * The generated function will set primary, secondary, tertiary, and quaternary
 * colours based on the category name.
 * @param {String} category The name of the category to set colours for.
 * @return {function} An extension function that sets colours based on the given
 *     category.
 */
const colourHelper = function(category) {
  var colours = scrunchColors[category];
  if (!(colours && colours.primary && colours.secondary && colours.tertiary &&
    colours.quaternary)) {
    throw new Error('Could not find colours for category "' + category + '"');
  }
  /**
   * Set the primary, secondary, tertiary, and quaternary colours on this block for
   * the given category.
   * @this {Blockly.Block}
   */
  return function() {
    this.setColourFromRawValues_(colours.primary, colours.secondary,
        colours.tertiary, colours.quaternary);
  };
};

/**
 * Extension to set the colours of a text field, which are all the same.
 */
const COLOUR_TEXTFIELD = function() {
  this.setColourFromRawValues_(scrunchColors.textFieldColor,
    scrunchColors.textFieldColor, scrunchColors.textFieldColor,
    scrunchColors.textFieldColor);
};

/**
 * Extension to make a block fit into a stack of statements, regardless of its
 * inputs.  That means the block should have a previous connection and a next
 * connection and have inline inputs.
 * @this {Blockly.Block}
 * @readonly
 */
const SHAPE_STATEMENT = function() {
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
};

/**
 * Extension to make a block be shaped as a hat block, regardless of its
 * inputs.  That means the block should have a next connection and have inline
 * inputs, but have no previous connection.
 * @this {Blockly.Block}
 * @readonly
 */
const SHAPE_HAT = function() {
  this.setInputsInline(true);
  this.setNextStatement(true, null);
};

/**
 * Extension to make a block be shaped as an end block, regardless of its
 * inputs.  That means the block should have a previous connection and have
 * inline inputs, but have no next connection.
 * @this {Blockly.Block}
 * @readonly
 */
const SHAPE_END = function() {
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
};

/**
 * Extension to make represent a number reporter in Scratch-Blocks.
 * That means the block has inline inputs, a round output shape, and a 'Number'
 * output type.
 * @this {Blockly.Block}
 * @readonly
 */
const OUTPUT_NUMBER = function() {
  this.setInputsInline(true);
  this.setOutputShape(ROUND);
  this.setOutput(true, 'Number');
};

/**
 * Extension to make represent a string reporter in Scratch-Blocks.
 * That means the block has inline inputs, a round output shape, and a 'String'
 * output type.
 * @this {Blockly.Block}
 * @readonly
 */
const OUTPUT_STRING = function() {
  this.setInputsInline(true);
  this.setOutputShape(ROUND);
  this.setOutput(true, 'String');
};

/**
 * Extension to make represent a boolean reporter in Scratch-Blocks.
 * That means the block has inline inputs, a round output shape, and a 'Boolean'
 * output type.
 * @this {Blockly.Block}
 * @readonly
 */
const OUTPUT_BOOLEAN = function() {
  this.setInputsInline(true);
  this.setOutputShape(HEXAGONAL);
  this.setOutput(true, 'Boolean');
};

/**
 * Mixin to add a context menu for a procedure definition block.
 * It adds the "edit" option and removes the "duplicate" option.
 * @mixin
 * @augments Blockly.Block
 * @package
 * @readonly
 */
const PROCEDURE_DEF_CONTEXTMENU = {
  /**
   * Add the "edit" option and removes the "duplicate" option from the context
   * menu.
   * @param {!Array.<!Object>} menuOptions List of menu options to edit.
   * @this Blockly.Block
   */
  customContextMenu: function(menuOptions) {
    // Add the edit option at the end.
    menuOptions.push(Blockly.Procedures.makeEditOption(this));

    // Find the delete option and update its callback to be specific to
    // functions.
    for (var i = 0, option; option = menuOptions[i]; i++) {
      if (option.text == Blockly.Msg.DELETE_BLOCK) {
        var input = this.getInput('custom_block');
        // this is the root block, not the shadow block.
        if (input && input.connection && input.connection.targetBlock()) {
          var procCode = input.connection.targetBlock().getProcCode();
        } else {
          return;
        }
        var rootBlock = this;
        option.callback = function() {
          var didDelete = Blockly.Procedures.deleteProcedureDefCallback(
              procCode, rootBlock);
          if (!didDelete) {
            alert(Blockly.Msg.PROCEDURE_USED);
          }
        };
      }
    }
    // Find and remove the duplicate option
    for (var i = 0, option; option = menuOptions[i]; i++) {
      if (option.text == Blockly.Msg.DUPLICATE) {
        menuOptions.splice(i, 1);
        break;
      }
    }
  }
};

/**
 * Mixin to add a context menu for a procedure call block.
 * It adds the "edit" option and the "define" option.
 * @mixin
 * @augments Blockly.Block
 * @package
 * @readonly
 */
const PROCEDURE_CALL_CONTEXTMENU = {
  /**
   * Add the "edit" option to the context menu.
   * @todo Add "go to definition" option once implemented.
   * @param {!Array.<!Object>} menuOptions List of menu options to edit.
   * @this Blockly.Block
   */
  customContextMenu: function(menuOptions) {
    menuOptions.push(Blockly.Procedures.makeEditOption(this));
  }
};


const SCRATCH_EXTENSION = function() {
  this.isScratchExtension = true;
};
/**
 * Register all extensions for scratch-blocks.
 * @package
 */
const registerAll = function() {
  var categoryNames =
      ['control', 'data', 'data_lists', 'sounds', 'motion', 'looks', 'event',
        'sensing', 'pen', 'operators', 'more'];
  // Register functions for all category colours.
  for (var i = 0; i < categoryNames.length; i++) {
    var name = categoryNames[i];
    Blockly.Extensions.register('colours_' + name, colourHelper(name));
  }

  // Text fields transcend categories.
  Blockly.Extensions.register('colours_textfield', COLOUR_TEXTFIELD);

  // Register extensions for common block shapes.
  Blockly.Extensions.register('shape_statement', SHAPE_STATEMENT);
  Blockly.Extensions.register('shape_hat', SHAPE_HAT);
  Blockly.Extensions.register('shape_end', SHAPE_END);

  // Output shapes and types are related.
  Blockly.Extensions.register('output_number', OUTPUT_NUMBER);
  Blockly.Extensions.register('output_string', OUTPUT_STRING);
  Blockly.Extensions.register('output_boolean', OUTPUT_BOOLEAN);

  // Custom procedures have interesting context menus.
  Blockly.Extensions.registerMixin('procedure_def_contextmenu', PROCEDURE_DEF_CONTEXTMENU);
  Blockly.Extensions.registerMixin('procedure_call_contextmenu', PROCEDURE_CALL_CONTEXTMENU);

  // Extension blocks have slightly different block rendering.
  Blockly.Extensions.register('scratch_extension', SCRATCH_EXTENSION);
};

registerAll();