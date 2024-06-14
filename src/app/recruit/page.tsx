'use client'
import Link from 'next/link'
import globalStyles from '@/app/page.module.scss'
import styles from './page.module.scss'
import { BreadCrumb } from '@/components/BreadCrumb/BreadCrumb'
import { useContext, useEffect, useState } from 'react';
import datas from './contents.json'
import { Employee } from './Employee'
import { CurrentLanguage  }from '@/app/layout'
import { RenderParagraphs } from '@/lib/RenderParagraphs'
import { useSearchParams } from 'next/navigation'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Carousel } from '@/components/Carousel/Carousel'
import resort from './resort.json'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

export default function Page() {
	const { language, setLanguage } = useContext(CurrentLanguage);
  const [isActiveLink, setIsActiveLink] = useState<boolean>(false);
  const [info, setInfo] = useState<InfoData | undefined>(undefined);
	const searchParams = useSearchParams();
  const jump = searchParams.get('jumpId');
  const [jumpId, setJumpId] = useState("");

  useEffect(() => {
    if (jump) {
      setJumpId(jump);
    }

    if (jumpId) {
      const element = document.getElementById(jumpId);
			console.log(element);


      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [jump, jumpId]);

  useEffect(() => {
    const infoData = datas.find(item => item.language === language);
    setInfo(infoData);
  }, [language]);

  if (!info) {
    return <div>Loading...</div>;
  }

  return (
    <div className={globalStyles.contentsWrapper}>
      <div className={styles.h1Container}>
        <h1 className={styles.h1}>{info.h1Greet}</h1>
      </div>

      <div className={styles.recruitHeaderContainer}>
        <BreadCrumb
          parentPath={info.parentAddress}
          childPath={info.h1Greet}
        />

        <div className={styles.links}>
					<hr className={styles.sp}/>
          {info.linkMenu.map((menu, key) => (
            <Link
              key={key}
              className={`
                ${styles.link}
                ${isActiveLink && styles.isActiveLink}
              `}
              href={`#${menu.url}`}
						>
							<KeyboardArrowRightIcon className={styles.sp}/>
              {menu.title}
            </Link>
          ))}
					<hr className={styles.sp}/>
        </div>
      </div>

      {/* <div className={styles.allMembersPhotoContainer}>
				<div className={styles.allMembersPhotoWrapper}>
					<img
						className={styles.allMembersPhoto}
						src='/images/recruit/topImage1.jpg'
						alt='member1'
					/>
					<img
						className={styles.allMembersPhoto}
						src='/images/recruit/topImage1.jpg'
						alt='member2'
					/>
					<img
						className={styles.allMembersPhoto}
						src='/images/recruit/topImage1.jpg'
						alt='member3'
					/>
					<img
						className={styles.allMembersPhoto}
						src='/images/recruit/topImage1.jpg'
						alt='member4'
					/>
				</div>
			</div> */}

      <div
				id='president'
				className={styles.presidentGreetContainer}
			>
				<h2 className={`
					${styles.h2}
					${styles.greetWrapper}
				`}>
					{info.h2Greet}
				</h2>
				<div className={styles.greet}>
					{RenderParagraphs(info.greet, '\n')}
					<div className={styles.presidentSignatureContainer}>
						<img
							className={styles.presidentPhoto}
							src='/images/recruit/president.jpg'
							alt='presidentPhoto'
						/>
						<div className={styles.presidentNameContainer}>
							<span>
								{info.company}
								<br />
								{info.post}
							</span>
							<span className={styles.presidentName}>{info.name}</span>
						</div>
					</div>
				</div>
			</div>

			<div
				id='interview'
				className={styles.recruitWrapper}
			>
				<h2 className={styles.h2}>
					{info.h2Interview}
				</h2>
				<Employee info={info}/>
			</div>

			<div
				id='Requirements'
				className={styles.requirementsContainer}
			>
				<h2 className={styles.h2}>{info.h2Recruitment}</h2>

				<table className={styles.requirementsTable}>
					<tbody>
						<tr className={styles.requirementsHeader2}>
							<th>勤務地</th>
							<td>徳島県 徳島市 北島田町・ 鮎喰町</td>
						</tr>

						<tr className={styles.requirementsHeader2}>
							<th>必要な資格やスキル</th>
							<td>要普通免許、未経験者OK、学歴不問、基本的なPCスキル</td>
						</tr>
						<tr className={styles.requirementsHeader2}>
							<th>勤務時間・曜日</th>
							<td>
								【アルバイト・パート】<br/>　週休2日制、8時30分～17時30分<br/>
								【正社員】<br/>　日・祝休み、土曜日は隔週休<br />
								　8時30分～17時30分<br />
								<br />
								※繁忙期は多少の残業有
							</td>
						</tr>
						<tr className={styles.requirementsHeader2}>
							<th>休暇・休日</th>
							<td>
								・年間休日：98日<br />
								・土曜日隔週、日祝休み<br />
								・年末年始、GW、お盆休暇
							</td>
						</tr>
						<tr className={styles.requirementsHeader2}>
							<th>勤務地所在地</th>
							<td>
								〒770-0051 徳島県徳島市北島田町3丁目2-4<br />
								徳島線鮎喰駅より車で3分<br />
								・無料駐車場完備<br />
								・マイカー通勤可
							</td>
						</tr>
						<tr className={styles.requirementsHeader2}>
							<th>代表電話番号</th>
							<td>0886326565</td>
						</tr>
						<tr className={styles.requirementsHeader2}>
							<th>代表者名</th>
							<td>廣田 敬司</td>
						</tr>
						<tr className={styles.requirementsHeader2}>
							<th>給与</th>
							<td>
								【正社員】①営業　②事務　③倉庫管理・配送<br />
								　月給／185,000円～235,000円<br />
								【パート・アルバイト】<br />
								　時給／1,000円～<br />
								<br />
								・正社員は上記のほかに、賞与年3回有（夏・冬・業績により決算賞与）<br />
								・年１回昇給査定あり
							</td>
						</tr>
						<tr className={styles.requirementsHeader2}>
							<th>試用期間</th>
							<td>
								試用期間：3か月<br />
								試用期間中の労働条件：同条件
							</td>
						</tr>
						<tr className={styles.requirementsHeader2}>
							<th>待遇・福利厚生</th>
							<td>
								各種社会保険完備（社会保険、雇用保険、労災保険、健康保険、厚生年金）<br />
								交通費支給（上限月15000円迄）<br />
								昇給査定年1回有、制服貸与<br />
								マイカー通勤可、無料駐車場完備<br />
								<br />
								正社員登用有<br />
								エクシブスーパースイートルーム全国27か所宿泊などの福利厚生あり（詳細は下記
								<Link
									className={styles.welfare}
									href='#Welfare'
								>
									福利厚生
								</Link>
								をご覧ください）
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div
				id='Welfare'
				className={styles.welfareContainer}
			>
				<h2 className={styles.h2}>福利厚生施設</h2>
				<div className={styles.welfareDescription}>
					<h3 className={`${styles.h3}`}>社員旅行よりも 家族旅行</h3>
					<p style={{textAlign: 'center', lineHeight: '2.5rem'}}>ベイコート倶楽部（芦屋、東京、蒲郡、横浜）はラグジュアリースウィートに｡<br />
					全国27箇所に有るエクシブはどこでも、どんなグレードの部屋でも利用可能｡<br />
					勤続5年毎に家族5人でスーパースウィートルームに宿泊できます｡<br />
					同時に平日二日の休日も支給されるので、混雑を避けたリゾートを楽めます♬<br />
					タイシン入社3～5年目から リゾートトラスト株式会社が運営する会員制リゾートホテル「エクシブ・ベイコート倶楽部」を利用できます。</p>
					<div>画像</div>
					<p>上記外観写真以外の掲載写真は弊社社員が撮影した写真となります。</p>
					{resort.map((prevResort, key) => (
						<div
							className={styles.resortWrapper}
							key={key}
						>
							{prevResort.published === "true" &&
								<div>
									<h3 className={styles.h3}>{prevResort.h3}</h3>
									<Carousel slides={prevResort.image}/>
								</div>
							}
							<Link
								className={styles.resortLink}
								href={prevResort.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								<PlayCircleIcon className={styles.resortArrow}/>
								<span>{prevResort.linkTitle}</span>
							</Link>
						</div>
					))}
				</div>
			</div>
    </div>
  )
}

type InfoData = {
  language: string;
	parentAddress: string;
	linkMenu: linksData;
  h1Greet: string;
  h2Greet: string;
  greet: string;
  company: string;
	post: string;
  name: string;
  h2Interview: string;
	employees: Employees;
	h2Recruitment: string;
};

type linksData = {
	title: string;
	url: string;
}[];

type Employees = {
  employee1: EmployeeData;
  employee2: EmployeeData;
  employee3: EmployeeData;
};

type EmployeeData = {
  join: string;
  name: string;
	photo: Photo;
  q1: string;
  a1: string;
  q2: string;
  a2: string;
  q3: string;
  a3: string;
  q4: string;
  a4: string;
	messageTitle: string;
  message: string;
};

type Photo = {
	photo1: string;
	photo2: string;
}
