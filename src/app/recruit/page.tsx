'use client'
import Link from 'next/link'
import globalStyles from '@/app/page.module.scss'
import styles from './page.module.scss'
import { BreadCrumb } from '@/components/BreadCrumb/BreadCrumb'
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image'
import presidentPhoto from '/public/images/recruit/hirota600-600.jpg'
import photo1 from '/public/images/recruit/recruit-hirota-sakurai-nakayama300-450-1.jpg'
import photo2 from '/public/images/recruit/recruit-nakayama-2-300-450.jpg'
import photo3 from '/public/images/recruit/recruit-nakayama300-450.jpg'
import photo4 from '/public/images/recruit/recruit-sakurai300-450.jpg'
import datas from './contents.json'
import { Employee } from './Employee'
import { CurrentLanguage  }from '@/app/layout'
import { RenderParagraphs } from '@/lib/RenderParagraphs'

export default function Page() {
	const { language, setLanguage } = useContext(CurrentLanguage);
  const [isActiveLink, setIsActiveLink] = useState<boolean>(false);

  const [info, setInfo] = useState<InfoData | undefined>(undefined);

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
          {info.linkMenu.map((menu, key) => (
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
						src={photo1}
						width={200}
						height={200}
						alt='member1'
					/>
					<Image
						className={styles.allMembersPhoto}
						src={photo1}
						width={200}
						height={200}
						alt='member2'
					/>
					<Image
						className={styles.allMembersPhoto}
						src={photo1}
						width={200}
						height={200}
						alt='member3'
					/>
					<Image
						className={styles.allMembersPhoto}
						src={photo1}
						width={200}
						height={200}
						alt='member4'
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
					{info.h2Greet}
				</h2>
				<div className={styles.greet}>
					{RenderParagraphs(info.greet, '\n')}
					<div className={styles.presidentSignatureContainer}>
						<Image
							className={styles.presidentPhoto}
							src={presidentPhoto}
							width={200}
							height={200}
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
						<tr>
							<th className={styles.requirementsHeader1} colSpan={2}>営業職</th>
						</tr>
						<tr className={styles.requirementsHeader2}>
							<th>給与</th>
							<td>200,000</td>
						</tr>
						<tr className={styles.requirementsHeader2}>
							<th>給与</th>
							<td>200,000</td>
						</tr>
						<tr className={styles.requirementsHeader2}>
							<th>給与</th>
							<td>200,000</td>
						</tr>
						<tr className={styles.requirementsHeader2}>
							<th>給与</th>
							<td>200,000</td>
						</tr>
						<tr className={styles.requirementsHeader2}>
							<th>給与</th>
							<td>200,000</td>
						</tr>
						<tr className={styles.requirementsHeader2}>
							<th>給与</th>
							<td>200,000</td>
						</tr>
					</tbody>
				</table>
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