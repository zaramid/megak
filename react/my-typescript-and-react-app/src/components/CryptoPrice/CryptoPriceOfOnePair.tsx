import React from "react";
import {BinanceOneCryptoPairData} from "../../types/crypto-data";

interface Props {
    onePair: BinanceOneCryptoPairData;
}

export const CryptoPriceOfOnePair = (props: Props) => (
    <p style={{color: Number(props.onePair.priceChangePercent) > 0 ? 'green' : 'red'}}>
        {props.onePair.symbol} aktualnie jest handlowane w średnioważonej cenie {props.onePair.weightedAvgPrice}
    </p>
);