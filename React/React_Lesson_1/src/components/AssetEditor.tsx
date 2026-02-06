import React from 'react';
import type { Asset } from '../models/Asset';

interface AssetEditorProps {
  onUpdate: (asset: Asset) => void;
}

interface AssetEditorState {
  name: string;
  symbol: string;
  value: string;
  change: string;
}

class AssetEditor extends React.Component<
  AssetEditorProps,
  AssetEditorState
> {
  state: AssetEditorState = {
    name: '',
    symbol: '',
    value: '',
    change: ''
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value
    } as Pick<AssetEditorState, keyof AssetEditorState>);
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    this.props.onUpdate({
      name: this.state.name,
      symbol: this.state.symbol,
      value: parseFloat(this.state.value),
      change: parseFloat(this.state.change)
    });

    this.setState({
      name: '',
      symbol: '',
      value: '',
      change: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Edit Asset</h3>
        <input name="name" value={this.state.name} onChange={this.handleChange} />
        <input name="symbol" value={this.state.symbol} onChange={this.handleChange} />
        <input type="number" name="value" value={this.state.value} onChange={this.handleChange} />
        <input type="number" name="change" value={this.state.change} onChange={this.handleChange} />
        <button type="submit">Update</button>
      </form>
    );
  }
}

export default AssetEditor;
