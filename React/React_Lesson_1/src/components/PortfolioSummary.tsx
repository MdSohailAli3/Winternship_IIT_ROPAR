import React from 'react';
import type { Asset } from '../models/Asset';

interface PortfolioSummaryProps {
    assets: Asset[];
}

const PortfolioSummary: React.FC<PortfolioSummaryProps> = ({ assets }) => {
    const totalValue = assets.reduce(
        (sum, asset) => sum + asset.value,
        0
    );

    const averageChange =
        assets.length === 0
            ? 0
            : assets.reduce((sum, asset) => sum + asset.change, 0) /
            assets.length;

    return (
        <div>
            <h3>Portfolio Summary</h3>
            <p>Total Value: ${totalValue.toFixed(2)}</p>
            <p>Average Change: {averageChange.toFixed(2)}%</p>
        </div>
    );
};

export default PortfolioSummary;
