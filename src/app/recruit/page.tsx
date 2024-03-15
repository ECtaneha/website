'use client'
import Link from 'next/link'
import globalStyles from '../page.module.scss'
import styles from './page.module.scss'
import { BreadCrumb } from '@/components/BreadCrumb/BreadCrumb'
import { useState } from 'react';
import Image from 'next/image'
import presidentPhoto from '/public/images/presidentPhoto.jpg'


export default function Page() {
  const [isActiveLink, setIsActiveLink] = useState<boolean>(false);

  return (
    <div className={globalStyles.contentsWrapper}>
      <div className={styles.h1Container}>
        <h1 className={styles.h1}>採用情報</h1>
      </div>

      <div className={styles.informationContainer}>
        <BreadCrumb
          parentPath='トップ'
          childPath='採用情報'
        />

        <div className={styles.links}>
          {linkMenu.map((menu, key) => (
            <Link
              key={key}
              className={`
                ${styles.link}
                ${isActiveLink && styles.isActiveLink}
              `}
              href={menu.url}>
                {menu.title}
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.allMembersPhotoContainer}>
				<div className={styles.allMembersPhotoWrapper}>
					<Image
						className={styles.allMembersPhoto}
						src={presidentPhoto}
						width={200}
						height={200}
						alt='presidentPhoto'
					/>
					<Image
						className={styles.allMembersPhoto}
						src={presidentPhoto}
						width={200}
						height={200}
						alt='presidentPhoto'
					/>
					<Image
						className={styles.allMembersPhoto}
						src={presidentPhoto}
						width={200}
						height={200}
						alt='presidentPhoto'
					/>
					<Image
						className={styles.allMembersPhoto}
						src={presidentPhoto}
						width={200}
						height={200}
						alt='presidentPhoto'
					/>
				</div>
			</div>

      <div
				id='president'
				className={styles.presidentGreetContainer}
			>
				<h2 className={`
					${styles.h2}
					${styles.greetWrapper}
				`}>
					社長あいさつ
				</h2>
				<div className={styles.greet}>
					<p>
						人生は河の流れに例えられます。
						源流は流れが急でも、海に近づくほど流れは穏やかになります。
						流れが穏やかになるということは、それだけ進む力が必要になるということです。人生も同様で、始まりは人の助けに背を押されながらも、いずれは自力で泳いでいかなければなりません。
						仕事もまた然り。
						先達に支えられている間に、自分で泳ぐ力を身に付けなければなりません。
						その為に必要なもののひとつが「忍耐力」だと思います。
						成長というのは失敗と成功の繰り返しです。
						成長できる人間というのは、失敗のくやしさと成功の喜びを知っています。
						そしてそれらは、人生や仕事を充実させる原動力になると思っています。
						失敗しても腐らず成功を目指せる忍耐力を持ち、また、境遇を同じくするチームメイトのくやしさに共感し、支え、成功を共に喜び合えることができる人間。
						私はそんな人間を志し、生きてきました。
						そして幸運なことに、私は志を同じくする先輩、同僚、後輩に囲まれて、
						充実した日々を経て今日に至ります。
						私は常々、そんな方々と仕事をしたいと考えています。
						私が知ることのできたくやしさと喜びを共有し、共に成長したい。
						そんな私の情熱に共感を抱ける方々とこれからも共に仕事ができることを、願ってやみません。
					</p>
					<div className={styles.presidentSignatureContainer}>
						<Image
							className={styles.presidentPhoto}
							src={presidentPhoto}
							width={200}
							height={200}
							alt='presidentPhoto'
						/>
						<div className={styles.presidentNameContainer}>
								株式会社タイシン<br />
							代表取締役社長
							<span className={styles.presidentName}>廣田敬司</span>
						</div>
					</div>
				</div>
			</div>

			<div
				id='interview'
				className={styles.recruitWrapper}
			>
				<h2 className={styles.h2}>
					インタビュー
				</h2>

				<div className={styles.bgcGray}>
					<div className={styles.interviewContainer}>
						<div className={styles.interviewWrapper}>
							<div className={styles.memberWrapper}>
								<div className={styles.memberPhotoWrapper}>
									<Image
										className={styles.memberPhoto}
										src={presidentPhoto}
										width={200}
										height={200}
										alt='presidentPhoto'
									/>
								</div>
								<p>営業職　2015年入社</p>
								<p className={styles.memberName}>中山 竜介</p>
							</div>
							<div className={styles.interview}>
								<p className={styles.question}>Q1-- なぜタイシンに入社したのですか？</p>
								<p className={styles.answer}>texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
								<p className={styles.question}>Q2-- 仕事内容を教えてください。</p>
								<p className={styles.answer}>texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
								<p className={styles.question}>Q3-- 成長したと感じるところ？</p>
								<p className={styles.answer}>texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
								<p className={styles.question}>Q4-- 入ってよかったと思うところは？</p>
								<p className={styles.answer}>texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
							</div>
						</div>
						<div className={styles.messageWrapper}>
							<p className={styles.messageTitle}>就活中の皆様へのメッセージ</p>
							<p className={styles.message}>texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
						</div>
					</div>
				</div>

				<div className={styles.bgcWhite}>
					<div className={styles.interviewContainer}>
						<div className={`
							${styles.interviewWrapper}
							${styles.flexReverese}
						`}>
							<div className={styles.memberWrapper}>
								<div className={styles.memberPhotoWrapper}>
									<Image
										className={styles.memberPhoto}
										src={presidentPhoto}
										width={200}
										height={200}
										alt='presidentPhoto'
									/>
								</div>
								<p>営業職　2015年入社</p>
								<p className={styles.memberName}>桜井</p>
							</div>
							<div className={styles.interview}>
								<p className={styles.question}>Q1-- なぜタイシンに入社したのですか？</p>
								<p className={styles.answer}>texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
								<p className={styles.question}>Q2-- 仕事内容を教えてください。</p>
								<p className={styles.answer}>texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
								<p className={styles.question}>Q3-- 成長したと感じるところ？</p>
								<p className={styles.answer}>texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
								<p className={styles.question}>Q4-- 入ってよかったと思うところは？</p>
								<p className={styles.answer}>texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
							</div>
						</div>
						<div className={styles.messageWrapper}>
							<p className={styles.messageTitle}>就活中の皆様へのメッセージ</p>
							<p className={styles.message}>texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
						</div>
					</div>
				</div>

				<div className={styles.bgcGray}>
					<div className={styles.interviewContainer}>
						<div className={styles.interviewWrapper}>
							<div className={styles.memberWrapper}>
								<div className={styles.memberPhotoWrapper}>
									<Image
										className={styles.memberPhoto}
										src={presidentPhoto}
										width={200}
										height={200}
										alt='presidentPhoto'
									/>
								</div>
								<p>営業職　2015年入社</p>
								<p className={styles.memberName}>中山 竜介</p>
							</div>
							<div className={styles.interview}>
								<p className={styles.question}>Q1-- なぜタイシンに入社したのですか？</p>
								<p className={styles.answer}>texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
								<p className={styles.question}>Q2-- 仕事内容を教えてください。</p>
								<p className={styles.answer}>texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
								<p className={styles.question}>Q3-- 成長したと感じるところ？</p>
								<p className={styles.answer}>texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
								<p className={styles.question}>Q4-- 入ってよかったと思うところは？</p>
								<p className={styles.answer}>texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
							</div>
						</div>
						<div className={styles.messageWrapper}>
							<p className={styles.messageTitle}>就活中の皆様へのメッセージ</p>
							<p className={styles.message}>texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
						</div>
					</div>
				</div>

			</div>
    </div>
  )
}

const linkMenu = [
  {
    'title': '社長あいさつ',
    'url': '#president'
  },
  {
    'title': 'インタビュー',
    'url': '#interview'
  },
  {
    'title': '募集要項',
    'url': '#Requirements'
  },
]

