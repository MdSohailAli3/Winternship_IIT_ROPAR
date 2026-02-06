import React from 'react';
import type { Asset } from '../models/Asset';

interface AssetListProps {
  assets: Asset[];
  onRemove: (symbol: string) => void;
}

const AssetList: React.FC<AssetListProps> = ({ assets, onRemove }) => {
  return (
    <ul>
      {assets.map(asset => (
        <li key={asset.symbol}>
          {asset.name} ({asset.symbol}) — ${asset.value} (
          {asset.change > 0 ? '+' : ''}
          {asset.change}%)
          <button onClick={() => onRemove(asset.symbol)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default AssetList;
