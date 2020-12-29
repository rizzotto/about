import React from 'react'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

export default function ProgressBar({ percent, symbol, color }) {
    return (
        <Progress status="success" percent={percent} theme={{
                success: {
                    symbol: symbol,
                    color: color
                }
            }}
        />
    )
}