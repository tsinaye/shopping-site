import { useCallback } from 'react'
import HookCustom from './HookCustom';

const StockEachDetails = ({ stock }) => {

	const handleClick = useCallback(() => {

		const { data: stock1, isLoading, error } = HookCustom(`http://192.168.0.3:8080/item/update/` + stock)


		console.log("new Address" + stock1);
		//	setConnectionAddress(newAddress);

	}, []);


	return (
		<div className='stockdetail'>
			<div className='stockdetail-container'>
				<div>
					<img
						src={stock.image}
						style={{ width: '500px', height: '250px', padding: '20px' }}
					/>
				</div>
				<div className='ml-8 leading-loose'>
					<h5 className='stockdetail-title'>
						Category: {stock.category}
					</h5>
					<p className='font-bold'>
						Item Name: {stock.name}
					</p>
					<p className='font-bold'>
						Price: {stock.price}
					</p>
					<p className='font-bold'>
						Qty: {stock.qty}
					</p>
					<p className='pt-2 leading-relaxed'>
						Description:
						1枚でレイヤードスタイルが楽しめる、ニットベストとキャミドッキングスカートのセットアイテムが到着です。ニットベストは単品使いもでき、着回しの幅が広がります。スカートはキャミインナーとドッキングになっており、インナーを気にせずコーディネートが完成します。ジャガード素材にプリントを施し、女性らしい雰囲気で、秋らしい印象へと導く1枚です。


						※照明の関係により、実際よりも色味が違って見える場合があります。
						またパソコン・スマートフォンなどの環境により、若干製品と画像のカラーが異なる場合もございます。予めご了承ください。
						商品の色味は、商品単品画像をご参照下さい。
						※商品画像はサンプルのため、色味やサイズ等の仕様に変更がある場合がご
						{/* <span>
									{stock.volumeInfo.description}
								</span> */}
					</p>

					<button className='btn-stockdetail' onClick={handleClick}>
						Add to Cart
					</button>

					<button>
						<img
							src='/src/img/no-favorite.png'
							style={{ height: '70px' }}
						/>
					</button>
				</div>
			</div>
		</div>
	);
}

export default StockEachDetails;
