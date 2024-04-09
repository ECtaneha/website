import Link from 'next/link';
import globalStyles from '../page.module.scss';
import styles from './page.module.scss';

export default function Page() {
  return (
    <div className={globalStyles.contentsContainer}>
      <div className={styles.policyContainer}>
        <h1 className={styles.h1}>個人情報保護方針</h1>
        <h2>個人情報保護方針</h2>
        <p>
          株式会社タイシン（以下「当社」といいます。）は、ご利用者様からの信頼を第一と考え、ご利用者様個人に関わる情報を正確、かつ機密に取り扱うことは、当社にとって重要な責務であると考えております。そのために、ご利用者様の個人情報に関する「個人情報保護方針」を制定し、個人情報の取り扱い方法について、全社員及び関連会社への徹底を実践してまいります。その内容は以下の通りです。なお、既に当社で保有し利用させて頂いている個人情報につきましても、本方針に従ってご利用者様の個人情報の取り扱いを実施致します。
        </p>

        <br />
        <h2>個人情報の取り扱いについて</h2>
        <h3>（1）個人情報の取得</h3>
        <p className={styles.description}>
          当社は個人情報を適法かつ公正な手段により収集致します。ご利用者様に個人情報の提供をお願いする場合は、事前に収集の目的、利用の内容を開示した上で、当社の正当な事業の範囲内で、その目的の達成に必要な限度において、個人情報を収集致します。
        </p>
        <br />
        <h3>（2）個人情報の利用および共同利用</h3>
        <p className={styles.description}>
          当社がお預かりした個人情報は、個人情報を頂いた方に承諾を得た範囲内で、また収集目的に沿った範囲内で利用致します。利用目的については、以下の「利用目的の範囲」の内、当社の正当な事業の範囲内でその目的の達成に必要な事項を利用目的と致します。
        </p>
        <br />
        <div className={styles.scope}>
          <p>利用目的の範囲について</p>
          <p>・業務上のご連絡をする場合</p>
          <p>・当社が取り扱う商品及びサービスに関するご案内をする場合</p>
          <p>・ご利用者様からのお問い合せまたはご依頼等への対応をさせて頂く場合</p>
          <p>・その他、ご利用者様に事前にお知らせし、ご同意を頂いた目的の場合</p>
        </div>
        {/* <p className={styles.description}>上記目的以外の利用について</p> */}
        <p className={styles.description}>
          上記以外の目的で、ご利用者様の個人情報を利用する必要が生じた場合には、法令により許される場合を除き、その利用について、ご利用者様の同意を頂くものとします。
        </p>
        <br />
        <h3>（3）個人情報の第三者提供</h3>
        <p className={styles.description}>
          当社は、ご利用者様の同意なしに第三者へご利用者様の個人情報の提供は行いません。但し個人情報に適用される法律その他の規範により、当社が従うべき法令上の義務等の特別な事情がある場合は、この限りではありません。
        </p>
        <h3>（4）個人情報の開示・修正等の手続</h3>
        <p className={styles.description}>
          ご利用者様からご提供頂いた個人情報に関して、照会、訂正、削除を要望される場合は、お問い合わせ先窓口までご請求ください。当該ご請求が当社の業務に著しい支障をきたす場合等を除き、ご利用者様ご本人によるものであることが確認できた場合に限り、合理的な期間内に、ご利用者様の個人情報を開示、訂正、削除致します。
        </p>
        <br />

        <h2>個人情報の保護に関する法令・規範の遵守について</h2>
        <p>
          当社は、当社が保有する個人情報に関して適用される個人情報保護関連法令及び規範を遵守します。また本方針は、日本国の法律、その他規範により判断致します。本方針は、当社の個人情報の取り扱いに関しての基本的な方針を定めるものであり、当社は本方針に則って、個人情報保護法等の法令・規範に基づく個人情報の保護に努めます。
        </p>
        <br />

        <h2>個人情報の安全管理措置について</h2>
        <p>
          当社は、個人情報への不正アクセス、個人情報の紛失、破壊、改ざん、漏えい等から保護し、正確性及び安全性を確保するために管理体制を整備し、適切な安全対策を実施致します。個人情報を取り扱う事務所内への部外者の立ち入りを制限し、当社の個人情報保護に関わる役員・職員等全員に対し教育啓発活動を実施するほか、管理責任者を置き個人情報の適切な管理に努めます。
        </p>
        <br />

        <h2>継続的な改善について</h2>
        <p>
          当社は、個人情報保護への取組みについて、日本国の従うべき法令の変更、取り扱い方法、環境の変化に対応するため、継続的に見直し改善を実施致します。
        </p>
        <br />

        <h2>お問い合わせ</h2>
        <p>個人情報の取り扱いに関するお問い合わせは、下記窓口にて受け付けております。</p>
        <p>【個人情報取扱い窓口】</p>
        <p>≪株式会社タイシン≫</p>
        <p>〒770-0051 徳島県徳島市北島田町3丁目2-4</p>
        <p>TEL：088-632-6565</p>
        <p>FAX：088-632-7737</p>
        <br />

        <h2>CookieとWebビーコンの利用</h2>
        <p>
          当サイトでは、ご利用者様のアクセス情報を取得するために「Cookie」や「Webビーコン」といった技術を利用しております。これらにより取得した情報はいずれも個人を特定することはできません。
        </p>
        <p>
          なお、当サイトを、お使いのブラウザーにおいてCookieを受け付けない設定や、画像を表示しない設定でご利用いただく場合、Webサイトで提供している機能の一部がご利用できない場合がございます。
        </p>
        <br />

        <h2>Googleアナリティクスの利用について</h2>
        <p>
          当サイトでは、Googleアナリティクスを利用することがあります。GoogleアナリティクスはCookieを利用して当サイトへのアクセス情報を収集します。アクセス情報の収集及び利用方法については、
          <Link
            className={styles.link}
            href='https://marketingplatform.google.com/about/analytics/terms/jp/'
          >
            Googleアナリティクスサービス利用規約及びGoogleプライバシーポリシー
          </Link>
          によって定められています。
        </p>
        <p>詳細は以下のページをご参照ください。</p>
        <Link
          className={styles.link}
          href='https://www.google.com/intl/ja/policies/privacy/partners/'
        >
          https://www.google.com/intl/ja/policies/privacy/partners/
        </Link>
      </div>
    </div>
  )
}