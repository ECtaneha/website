'use client'
import React, { useState } from 'react'
import globalStyles from '../../app/page.module.scss'
import styles from './news.module.css'
import { NewsArticle } from './NewsArticle'

const tags = [
  "すべて",
  "お知らせ",
  "レク",
  "テキスト"
]

export const News = () => {
  const [selectedTag, setSelectedTag] = useState<string>('すべて');

  return (
    <div className={`
      ${globalStyles.contentsWrapper}
      ${styles.backGroundImage}
    `}>
      <div className={styles.addPadding}>
        <h2 className={globalStyles.h2}>
          <div className={globalStyles.h2Wrapper}>
            <p>お知らせ</p>
            <span>notification</span>
          </div>
        </h2>
        <div className={styles.contents}>
          <div className={styles.tags}>
            {tags.map((tag: string, key: number) => (
              <button
                key={key}
                className={`
                  ${styles.tagSelectButton}
                  ${tag === selectedTag && styles.isTagSelected}
                `}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          <ul className={styles.ul}>
          {selectedTag !== 'すべて'
            ? datas.filter((data: data) => data.tag === selectedTag)
                .map((data: data, key: number) => (
                  <NewsArticle
                    key={key}
                    createTime={data.createTime}
                    tag={data.tag}
                    title={data.title}
                    text={data.text}
                  />
                )
              )
            : datas.map((data: data, key: number) => (
                <NewsArticle
                  key={key}
                  createTime={data.createTime}
                  tag={data.tag}
                  title={data.title}
                  text={data.text}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

type data = {
  'createTime': string,
  // 'tag': string[],
  'tag': string,
  'title': string,
  'text': string,
}

const datas = [
  {
    'createTime': '2024-03-05',
    'tag': 'お知らせ',
    'title':'ホームページリニューアルのお知らせ',
    'text': '本日、ホームページをリニューアルしましたのでお知らせいたします。これからも社員一同、サービスの向上に取り組んで参りますので引き続きご愛顧賜りますようよろしくお願いいたします。いたお客様は新ホームページへブックマークしなおしてください。お手数おかけしますがよろしくお願いします。',
  },
  {
    'createTime': '2024-05-01',
    'tag': 'お知らせ',
    'title':'取引先者数が1000社を超えました',
    'text': 'おかげさまで、本日弊社の取引先社数が1000社を超えました。社員一同邁進して参りますので、引き続き弊社をご愛顧のほどよろしくお願いします。',
  },
  {
    'createTime': '2024-06-01',
    'tag': 'レク',
    'title':'社内行事による臨時休業のお知らせ',
    'text': '2024年6月25日(月)・26日(火)の2日間、社内行事のため臨時休業させていただきます。大変ご迷惑をお掛けいたしますが、よろしくお願い申し上げます。',
  },
  {
    'createTime': '2024-08-01',
    'tag': 'テキスト',
    'title':'暑中見舞い辞退のお知らせ',
    'text': '昨今のデジタル化推進や環境負荷の低減などの時代背景を鑑み、暑中見舞いのご挨拶を控えさせていただきます。既に暑中見舞いをお送り頂いたお取引企業の皆様には心よりお礼申し上げます。今後とも変わらぬご厚情を賜りますよう何卒宜しくお願い申し上げます。',
  },
  {
    'createTime': '2024-09-15',
    'tag': 'お知らせ',
    'title':'資本金増資のお知らせ',
    'text': '2024年9月15日付けで増資を行い、資本金を5000万円としましたのでここにおしらせいたします。この度の増資による財務基盤の強化により業務拡大を図り、今まで以上に努力していく所存でございます。今後とも末永いご指導、ご鞭撻を賜ります様お願い申し上げます。',
  },
]