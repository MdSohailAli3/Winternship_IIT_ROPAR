import React, { useReducer } from 'react';
import type { Asset } from './models/Asset';
import AssetForm from './components/AssetForm';
import AssetEditor from './components/AssetEditor';
import AssetList from './components/AssetList';
import PortfolioSummary from './components/PortfolioSummary';

interface PortfolioState {
  assets: Asset[];
}

type PortfolioAction =
  | { type: 'add'; asset: Asset }
  | { type: 'remove'; symbol: string }
  | { type: 'update'; asset: Asset };

function portfolioReducer(
  state: PortfolioState,
  action: PortfolioAction
): PortfolioState {
  switch (action.type) {
    case 'add':
      return { assets: [...state.assets, action.asset] };
    case 'remove':
      return {
        assets: state.assets.filter(a => a.symbol !== action.symbol)
      };
    case 'update':
      return {
        assets: state.assets.map(a =>
          a.symbol === action.asset.symbol ? action.asset : a
        )
      };
    default:
      return state;
  }
}

const App: React.FC = () => {
  const [state, dispatch] = useReducer(portfolioReducer, {
    assets: []
  });

  return (
    <div>
      <h1>Smart Portfolio Dashboard</h1>

      <AssetForm onAdd={asset => dispatch({ type: 'add', asset })} />
      <AssetEditor onUpdate={asset => dispatch({ type: 'update', asset })} />

      <AssetList
        assets={state.assets}
        onRemove={symbol =>
          dispatch({ type: 'remove', symbol })
        }
      />

      <PortfolioSummary assets={state.assets} />
    </div>
  );
};

export default App;
