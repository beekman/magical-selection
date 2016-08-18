'use babel';

import RainbowSelectionFluxView from './rainbow-selection-flux-view';
import { CompositeDisposable } from 'atom';

export default {

  rainbowSelectionFluxView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.rainbowSelectionFluxView = new RainbowSelectionFluxView(state.rainbowSelectionFluxViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.rainbowSelectionFluxView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'rainbow-selection-flux:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.rainbowSelectionFluxView.destroy();
  },

  serialize() {
    return {
      rainbowSelectionFluxViewState: this.rainbowSelectionFluxView.serialize()
    };
  },

  toggle() {
    console.log('RainbowSelectionFlux was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
