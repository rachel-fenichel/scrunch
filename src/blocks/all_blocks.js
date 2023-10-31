
import * as Blockly from 'blockly';

import {blocks} from './text';
import {blocks as mathBlocks} from './math';
import {blocks as motionBlocks} from './motion';
import {blocks as looksBlocks} from './looks';
import {blocks as soundBlocks} from './sound';
import {blocks as eventBlocks} from './event';
import {blocks as controlBlocks} from './control';

export function defineScrunchBlocks() {
    Blockly.common.defineBlocks(blocks);
    Blockly.common.defineBlocks(mathBlocks);
    Blockly.common.defineBlocks(motionBlocks);
    Blockly.common.defineBlocks(looksBlocks);
    Blockly.common.defineBlocks(soundBlocks);
    Blockly.common.defineBlocks(eventBlocks);
    Blockly.common.defineBlocks(controlBlocks);
};