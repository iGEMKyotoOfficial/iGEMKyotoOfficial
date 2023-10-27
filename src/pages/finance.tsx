import Contain from "components/container";
import Hero from "components/hero";
import Link from "next/link";
import Image from "next/image";
import PostBody from "components/post-body";
import iGEM5 from "images/others/iGEM5.jpg";
import iGEM6 from "images/others/iGEM6.jpg";
import Meta from "components/meta";

export default function Finance() {
  return (
    <Contain>
      <Meta
        pageTitle="支援のお願い"
        pageDesc="私たちを応援してくださる企業・個人の方を募集しております"
      />
      <Hero
        title="支援のお願い"
        subtitle="私たちを応援してくださる企業・個人の方を募集しております"
      />

      <PostBody>
        <h2>ご支援のお願い</h2>
        <Image
          className="iGEM5"
          src={iGEM5}
          alt=""
          layout="responsive"
          sizes="100vw"
          style={{ borderRadius: "10px" }}
          priority
        />
        <p>
          iGEMKyotoは、次世代を担う新たなテクノロジーである合成生物学にご興味があり、我々の活動を支援してくださる方を募集しております。
        </p>
        <p>
          iGEM Kyoto
          のメンバーは、毎年iGEMの大会で上位に入賞することを目標にし、好奇心の赴くままに合成生物学の研究が社会へ貢献するための新たな道を模索してきました。
          <br />
          2016年度大会では腸管内ノロウイルス除去システムの開発プロジェクトで金賞を受賞することができ、続く2017,
          2018年度大会では銀賞を受賞しました。2019年度大会では洗濯排水からマイクロプラスチックを回収する手法の開発プロジェクトで金賞を受賞した上、2019年度iGEM
          Kyoto史上初めて2つの部門賞の最終候補に選ばれました。2021年度大会では人々の生活と深く関わる切り花を中心としたプロジェクトを打ち出し、ウイルスの検出システム、大腸菌のプラスミド非対称分裂を利用した新しい物質生産システム、RNAiを用いた害虫駆除スキームなどが評価され金賞を受賞し、さらに画像診断システムの成果で
          Best Software Tools 部門賞にノミネートされました。
          <br />
          iGEM
          の大会で上位に入賞することはかなわなくとも、学部生の内から科学の言葉で議論を交わし、世界中の志を同じくする学生と交流を深める機会は唯一無二のものです。
          <br />
        </p>
        <p>
          しかし、iGEM の大会に参加するためには多額の費用が必要です。
          <br />
          概算して、チームとして登録に75万円、大会出場費に40万円(2023年5月現在)かかり、そのほかに研究活動のための試薬購入費やアウトリーチにかかる経費などもあります。またこの中には現地への渡航費などは含まれておらず、それも含めると実質資金はさらに必要になります。特に大会参加費はここ数年で大きく値上げされてきており、メンバーの個人的な支出では補いきれなくなっています。
          <br />
          そのため、2015年度や2022年度は主に金銭的な懸念から出場を断念せざるを得ませんでした。
        </p>

        <p>
          我々は幸いにもいくつかの個人や団体様からのご支援をいただき活動を続けることができております。
          <br />
          2016, 2018, 2019年度大会では{" "}
          <Link href="https://www.kikin.kyoto-u.ac.jp/spec/2018/02.html">
            京都大学の SPEC
          </Link>
          から支出された補助金を利用して、大会参加費を含めた活動資金をまかなうことができました。
          <br />
          また、2021年度大会以降、
          <Link href="https://www.toyobo.co.jp/">TOYOBO</Link>
          様には試薬一式と活動費のご援助を、
          <Link href="https://www.nagase.co.jp/">長瀬産業</Link>
          様には活動費のご援助を賜りました。ご支援いただいた皆様、本当にありがとうございました。
        </p>

        <p>
          iGEM Kyoto
          の活動と発展に賛同いただき、ご助力をいただける方々を広く募集しております。ご支援の声をお待ちしています。
        </p>

        <h2>寄付いただいた資金の使途について</h2>
        <Image
          className="iGEM6"
          src={iGEM6}
          alt=""
          layout="responsive"
          sizes="100vw"
          style={{ borderRadius: "10px" }}
          priority
        />
        <p>
          ・iGEM Jamboree(大会) への登録費および参加費
          <br />
          ・生物学実験に必要な試薬や機器の調達
          <br />
          ・大会へ提出する成果物にかかる費用
          <br />
          ・取材や教育などの社会活動
          <br />
        </p>

        <p>
          活動については定期的に発行するニュースレターでもお伝えします。
          <br />
          他の形でのご支援についてのご提案や不明な点がありましたら是非
          <Link href="./contact" className="contactlink">
            お問い合わせフォーム
          </Link>
          の方から問い合わせください。
          <br />
          また、現在基金などを通した寄付の形も検討中です。
        </p>

        <h2>ご支援フォーム</h2>
        <p style={{ margin: "2em auto" }}>
          <Link
            href="https://forms.gle/EYVjfnL8je1Ajthy9"
            className="btn btn-flat"
          >
            <span>ご支援フォーム</span>
          </Link>
          <br />
        </p>
      </PostBody>
    </Contain>
  );
}
