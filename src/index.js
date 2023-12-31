/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly';
// Has side effects.
import './messages';
// Has side effects.
import './blocks/vertical_extensions';
// import {blocks} from './blocks/text';
// import {blocks as mathBlocks} from './blocks/math';
// import {blocks as motionBlocks} from './blocks/motion';
// import {blocks as looksBlocks} from './blocks/looks';
import { defineScrunchBlocks } from './blocks/all_blocks';
import {forBlock} from './generators/javascript';
import {javascriptGenerator} from 'blockly/javascript';
import {save, load} from './serialization';
import {
  ContinuousToolbox,
  ContinuousFlyout,
  ContinuousMetrics,
} from '@blockly/continuous-toolbox';
import {toolbox} from './toolbox';
import './index.css';

// Register the blocks and generator with Blockly
defineScrunchBlocks();
Object.assign(javascriptGenerator.forBlock, forBlock);

// Set up UI elements and inject Blockly
const blocklyDiv = document.getElementById('blocklyDiv');
const ws = Blockly.inject(blocklyDiv,
  {
    toolbox: document.getElementById('toolbox-categories'),
    //toolbox,
    renderer: 'zelos',
    plugins: {
      'toolbox': ContinuousToolbox,
      'flyoutsVerticalToolbox': ContinuousFlyout,
      'metricsManager': ContinuousMetrics,
    },
  }
  );

// Load the initial state from storage and run the code.
load(ws);

// Every time the workspace changes state, save the changes to storage.
ws.addChangeListener((e) => {
  // UI events are things like scrolling, zooming, etc.
  // No need to save after one of these.
  if (e.isUiEvent) return;
  save(ws);
});


// Whenever the workspace changes meaningfully, run the code again.
ws.addChangeListener((e) => {
  // Don't run the code when the workspace finishes loading; we're
  // already running it once when the application starts.
  // Don't run the code during drags; we might have invalid state.
  if (e.isUiEvent || e.type == Blockly.Events.FINISHED_LOADING ||
    ws.isDragging()) {
    return;
  }
});
