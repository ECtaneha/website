import styles from './page.module.scss';
import { BreadCrumb } from '@/components/BreadCrumb/BreadCrumb';

export default function Page() {
  return (
    <div className={styles.sitePolicyContainer}>
      <BreadCrumb
        parentPath='トップ'
        childPath='サイトポリシー'
      />
      <h1 className={styles.h1}>サイトポリシー</h1>
      <h2 className={styles.h2}>著作権について</h2>
      <ol className={styles.sitePolicyOl}>
        <li>
          当ホームページに掲載されている個々の情報（文字、写真、イラスト等）は著作権の対象となっております。また、当ホームページ全体も編集著作物として著作権の対象となっており、ともに各国の著作権法及び国際条約により保護されております。
        </li>
        <li>
          当ホームページの内容の全部又は一部については、私的使用又は引用等著作権法上認められた行為として、適宜の方法により出所を明示することにより、引用、転載複製を行うことができます。ただし、「無断転載を禁じます」等の注記がある場合にはこの限りではありません。
        </li>
        <li>
          当ホームページの内容の全部又は一部について、無断で改変を行うことはできません。
        </li>
      </ol>

      <h2 className={styles.h2}>免責事項</h2>
      <ol className={styles.sitePolicyOl}>
        <li>
          当ホームページに情報を掲載する際には、情報の正確さについては万全を期しておりますが、技術的・法的に不完全な記述や誤植が含まれる場合があります。当方は利用者が当ホームページの情報を用いて行う一切の行為について、何ら責任を負うものではありません。
        </li>
        <li>
          当ホームページの保守、火災・停電その他の自然災害及びウイルスや第三者の妨害等行為などの不可抗力によって、当ホームページによるサービスが停止したことに起因して利用者に生じた損害につき、当方は責任を負いかねますのでご了承ください。
        </li>
        <li>
          ブラウザソフトや各種ツールなどのダウンロード及びインストールは、利用者の責任に基づいて行ってください。ダウンロード及びインストールに際して発生する障害やトラブルについて、当方は損害賠償や問題解決の責任を一切負いません。
        </li>
      </ol>
      <br />

      <h2 className={styles.h2}>メディアポリシー</h2>
      <ol className={styles.sitePolicyOl}>
        <li>
          <h3>コンテンツの品質と信頼性</h3>
          <p>
            弊社は、事実に基づき、客観的で公平な視点から作成し、正確で信頼性の高い情報を提供することに努めます。情報の正確性を確保するために、複数の信頼できるソースからの情報を使用し、事実確認を行います。
          </p>
        </li>
        <li>
          <h3>バイアスと透明性</h3>
          <p>
            可能な限り客観的でバランスの取れたコンテンツを提供することを目指します。その際、編集者やライターの意見や立場が含まれる場合は、明示的にラベル付けされます。透明性を確保するために、編集方針や記事の修正履歴を公開します。
          </p>
        </li>
        <li>
          <h3>著作権とクレジット</h3>
          <p>
            著作権法を遵守し、正当な許可や引用に基づいて他者の知的財産権を尊重します。他者の作品や情報を使用する際には、適切なクレジットを表示し、著作権情報を尊重します。
          </p>
        </li>
        <li>
          <h3>プライバシーと個人情報保護</h3>
          <p>
            個人のプライバシーを尊重し、個人情報を保護するために最善の努力をします。個人が特定できる情報を含むコンテンツを作成、公開、共有する際には、適切な同意を得たり、匿名化を行ったりします。
          </p>
        </li>
        <li>
          <h3>コンテンツの多様性と包括性</h3>
          <p>
            当様々な視点や意見を反映するコンテンツを提供することを重視します。差別や偏見に基づくコンテンツの使用を禁止し、多様性と包括性を促進する方針を推進します。
          </p>
        </li>
        <li>
          <h3>コミュニティと対話</h3>
          <p>
            利用者との対話を促進し、コミュニティの意見やフィードバックを積極的に受け入れます。コメントやフィードバックのモデレーションは、公正かつ適切に行います。
          </p>
        </li>
      </ol>
      <br />
      <p>
        以上の原則に基づいて、弊社は利用者に価値あるコンテンツを提供し、良質なメディア体験を提供します。
      </p>
      <br />

      <h2 className={styles.h2}>リンクについて</h2>
      <ol className={styles.sitePolicyOl}>
        <li>
          当ホームページは、当社以外の第三者のウェブサイトにリンクしています。各リンクサイトの内容および、それらの利用により生じる一切の損害について、当社は何ら責任を負うものではありません。
        </li>
        <li>
          取扱品目リンク集は、リンクフリーを除く全てのメーカー様の許可を得て掲載していますので、当ホームページへリンクを無断で張ることはご遠慮ください。
        </li>
        <li>
          リンクサイトをご利用する際は、それぞれのリンクサイトに掲載されている利用上のルールを遵守してください。
        </li>
      </ol>
      <br />

      <h2 className={styles.h2}>その他</h2>
      <p>当ホームページは予告なしに内容を変更又は削除する場合があります。あらかじめご了承ください。</p>
      <br />
    </div>
  )
}