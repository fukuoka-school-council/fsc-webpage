import type { APIRoute } from "astro"

export const GET: APIRoute = async () => {
	const executives = [
		{
			name: "野本海晴",
			furigana: "のもとみはる",
			schoolRole: "生徒会長",
			role: "広報委員",
			schoolName: "新宮高校",
			grade: 3,
			comment:
				"私は新宮高校が大好きです。自分たちの学校をよりよくしていけるものがたくさんある福岡生徒会連盟は僕のように自分の学校が大好きな人たちにとってとても価値のあるものです。私たちと一緒に学校がよりよくなるために何が必要か考えて積極的に活動していきましょう。",
		},
		{
			name: "井上葉月",
			furigana: "いのうえはづき",
			schoolRole: "文化副委員長",
			role: "副連盟長",
			schoolName: "新宮高校",
			grade: 2,
			comment:
				"皆さまの学校がより良い形となるような活動を増やしていきます。たくさんの参加をお待ちしてます！",
		},
		{
			name: "岡本陽多",
			furigana: "おかもとようた",
			schoolRole: "副会長",
			role: "広報委員長",
			schoolName: "九州国際大学付属高校",
			grade: 3,
			comment:
				"福岡の生徒会活動がより活性化されるように頑張っています！たくさんの加盟よろしくお願いします🙇",
		},
		{
			name: "田中十和",
			schoolRole: "生徒会長",
			role: "代表",
			schoolName: "東福岡高等学校",
			grade: 3,
			comment:
				"第1期の代表として福岡の基盤を作るために全員で尽力して参ります。よろしくお願いします！",
		},
		{
			name: "平塚 裕樹",
			schoolRole: "生徒会長",
			role: "企画",
			schoolName: "九州国際大学付属高等学校",
			grade: 3,
			comment:
				"この団体を通して自身の生徒会活動をより広くかつ深めていきましょう。みんなで楽しい生徒会を作っていきましょう。",
		},
		{
			name: "古賀愛佳",
			furigana: "こがあいか",
			schoolRole: "生徒会長",
			role: "デザイン部",
			schoolName: "福岡女子商業高校",
			grade: 3,
			comment:
				"この団体を通して福岡の生徒会はもちろん、沢山の生徒会を盛り上げていきたいです！みんなで意味のある生徒会組織を作り上げましょう！",
		},
		{
			name: "吉田美羽",
			schoolRole: "生徒会長",
			role: "デザイン部",
			schoolName: "福岡県立中間高等学校",
			grade: 3,
			comment:
				"福岡の生徒会を私たちと一緒に盛り上げていきましょう！！！！みなさんと関われることを楽しみにしています‪☆‪☆",
		},
		{
			name: "川島朱莉",
			furigana: "かわしまあかり",
			schoolRole: "生徒会長",
			role: "人事部",
			schoolName: "筑紫女学園高校",
			grade: 3,
			comment:
				"学校外の生徒会の方と話し合える貴重な団体に参加させていただいていることに感謝して誠心誠意取り組んでいきます。全員でより良い生徒会活動を行いましょう！",
		},
		{
			name: "髙浪実里",
			furigana: "たかなみみのり",
			schoolRole: "生徒会長",
			role: "広報",
			schoolName: "精華女子高等学校",
			grade: 3,
			comment:
				"福岡から全国へ！みなさんの活動を後押しできる団体として生徒会を盛り上げていきたいです。",
		},
		{
			name: "里村美羽",
			furigana: "さとむらみう",
			schoolRole: "副会長",
			role: "人事",
			schoolName: "精華女子高等学校",
			grade: 3,
			comment:
				"このような機会に参加でき、感謝しています。一緒に生徒会活動の幅を広げ、福岡生徒会を盛り上げていきましょう！",
		},
	]

	return new Response(JSON.stringify(executives), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	})
}
