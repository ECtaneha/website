import React from 'react'
import { Hexagon } from '../Hexagon/Hexagon'
import globalStyles from '../../app/page.module.scss'
import styles from './mission.module.scss'
import Image from 'next/image'
import missionImage from '/public/images//mission.png'

export const Mission = () => {
  const width = 800;
  const height = 600;
  return (
    <div className={globalStyles.contentsWrapper}>
      <h2 className={globalStyles.h2}>
        <div className={globalStyles.h2Wrapper}>
          <p>タイシン　３つの使命</p>
          <span>mission</span>
        </div>
      </h2>
      <Image
        className={styles.missionImage}
        src={missionImage}
        width={width}
        height={height}
        alt='タイシン３つの使命'
      />
      {/* <div className={styles.missionWrapper}>
        {datas.map((data, key) =>
          <Hexagon
            key={key}
            index={key}
            title={data.title}
            description={data.description}
          />
        )}
      </div> */}
    </div>
  )
}

const datas = [
  {
    title: 'お客様ファースト',
    description: 'お客様の問題は私たちの問題。共に悩み、共に歩み、共に喜び、ベストな解決を提供します。',
  },
  {
    title: '業界の発展と貢献',
    description: '業界の発展に貢献し、先端技術と革新的なアプローチで、共に興隆を築くパートナーとしての一翼を担います。',
  },
  {
    title: '自覚と誇り',
    description: 'インフラ関連事業者としての自覚と誇りを胸に、安定と効率を提供し、未来の基盤を築きます。',
  },
]

