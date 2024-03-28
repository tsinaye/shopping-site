import Navbar from './Navbar';

const Main = () => {

	return (
		<div>
			<>
				<Navbar />
				<div className='header'>
				</div>
				<div className='max-w-7xl mx-auto'>
					<br /><br />
					---------------------------------------------------<br /><br />

					【ご注文いただいてからお届けまでの流れ】<br /><br />

					ご注文<br />
					↓<br />
					ご入金確認<br />
					↓<br />
					当社発注（お取り寄せ）<br />
					↓3～14営業日前後<br />
					海外発送<br />
					↓ 5営業日前後<br />
					国内発送<br />
					↓1〜2日前後<br />
					到着<br />

					---------------------------------------------------<br /><br />

				</div>
			</>
		</div>
	);
}

export default Main;
