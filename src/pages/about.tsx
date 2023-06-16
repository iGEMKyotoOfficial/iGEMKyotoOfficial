import Meta from 'components/meta'
import Contain from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import Contact from 'components/contact'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import Image from 'next/image'
import Link from 'next/link'
import eyecatch from 'images/others/butterfly.jpg'
import Accordion from 'components/accordion'
import iGEM2 from 'images/others/iGEM2.jpg'
import iGEM3 from 'images/others/iGEM3.jpeg'
import iGEM4 from 'images/others/iGEM4.jpg'
import flowerver from 'images/others/2021_history.jpg'
import SLiCE from 'images/others/SLiCE.jpeg'
import history2012 from 'images/others/2012_history.jpeg'
import history2017 from 'images/others/2017_history.jpeg'
import history2018 from 'images/others/2018_history.jpeg'
import history2019 from 'images/others/2019_history.jpeg'
import TableOfContents from 'components/tableOfContents'
import { Heading } from 'components/tableOfContents'
import 'bootstrap/dist/css/bootstrap.css'

const scrollbarData : Heading[] = [
  {
    level: 2,
    text: "iGEM Kyotoについて"
    id: "1"
  },
  {
    level: 3,
    text: "2008"
    id: "2"
  },
  {
    level: 3,
    text: "2009"
    id: "3"
  },
  {
    level: 3,
    text: "2010"
    id: "4"
  },
  {
    level: 3,
    text: "2011"
    id: "5"
  },
  {
    level: 3,
    text: "2012"
    id: "6"
  },
  {
    level: 3,
    text: "2013"
    id: "7"
  },
  {
    level: 3,
    text: "2014"
    id: "8"
  },
  {
    level: 3,
    text: "2016"
    id: "9"
  },
  {
    level: 3,
    text: "2017"
    id: "10"
  },
  {
    level: 3,
    text: "2018"
    id: "11"
  },
  {
    level: 3,
    text: "2019"
    id: "12"
  },
  {
    level: 3,
    text: "2020"
    id: "13"
  },
  {
    level: 3,
    text: "2021"
    id: "14"
  },
  {
    level: 3,
    text: "2022"
    id: "15"
  },
  {
    level: 3,
    text: "2023"
    id: "16"
  },
  {
    level: 2,
    text: "iGEMについて"
    id: "17"
  },
  {
    level: 2,
    text: "合成生物学とは"
    id: "18"
  },
  {
    level: 2,
    text: "iGEM の大会コンセプト"
    id: "19"
  },
]

export default function About() {
  return (

    <Contain >
      <Meta
        pageTitle="About"
        pageDesc="iGEM Kyoto、iGEM、合成生物学についてご説明します"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width.toString()}
        pageImgH={eyecatch.height.toString()}
      />

      <Hero
        title="About"
        subtitle="iGEM Kyoto、iGEM、合成生物学についてご説明します"
      />

      <figure>
        <Image className='eyecatch'
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="100vw"
          priority
        />
      </figure>

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <h2 id="1">iGEM Kyoto について</h2>
            <p>
              iGEM Kyoto は、iGEM への出場を通して、学生が責任と自主性に基づき自由に研究活動を行うことを目的とする、京都大学の学生チームです。
              2008年に発足して以来、iGEM への参加を続けてきました。
              現在は農学部、理学部、医学部、工学部などの様々な学部から学生が集まり、活動しています。
              <br /><br />
              私たちのチームは学生メンバーだけでは成り立ちません。
              研究の安全性に対する監督・指導には、学内の先生方にお世話になっています。
              また、専門家の方、実際にその分野の現場で働いていらっしゃる方、OB・OGの先輩方にアドバイスをいただきながら活動を進めています。
            </p>
            <Row>
              <Col><Link href="/member" className="simple_square_btn2" >メンバー紹介</Link></Col>
              <Col><Link href="/activities" className="simple_square_btn2" >活動紹介</Link></Col>
            </Row>
            <Accordion heading="iGEM Kyotoの歴史">
              <p>
                <b id ="2" class="2008">2008</b><br />
                iGEM Kyotoは2008年度に結成しました。メンバーは様々な専攻の学部学生を主体とし、加えて修士院生とアドバイザーから構成されています。テーマ"Raise the Titanic!"の独創性は群を抜いていましたが、残念ながら入賞を逃しました。
                <Link href="https://2008.igem.org/Team:Kyoto" className="simple_square_btn2">Wiki</Link>
                <br /><b id ="3" class="2009">2009</b><br />
                「今年こそは」と意気込んだ2009年は、さらにユニークなプロジェクトを二つ（"Time Bomb"と"Cells in cells"）立ち上げ、主に夏休みの期間を利用して遂行し、銀賞を受賞しました。
                <Link href="https://2009.igem.org/Team:Kyoto/GSDD/Abstract" className="simple_square_btn2">Wiki</Link>
                <br /><b id ="4" class="2010">2010</b><br />
                2010年度のプロジェクトは"The Fantastic Lysisbox"です。バイオハザードの対策を考える中から細胞を溶かすことに注目しました。これはバイオハザードの防止だけでなく、製薬やさらに身近な例としてはバイオアロマなどにも応用できる優れたデバイスです。今年度の大会は11/5～11/8にかけて行われ、金賞を受賞しました。
                <Link href="https://2010.igem.org/Team:Kyoto" className="simple_square_btn2">Wiki</Link>
                <br /><b id="5" class="2011">2011</b><br />
                2011年度のテーマは「食虫大腸菌」。1、2回生を中心とする新チームで、栄養不足になると光を発して虫をおびき寄せ、捕えて、消化する、そんな「もっと生き物っぽい」新種の大腸菌の開発を目指しました。初めて行われたアジア予選は惜しくも敗退してしまい、メダルは銀にとどまりました。
                <Link href="https://2011.igem.org/Team:Kyoto" className="simple_square_btn2">Wiki</Link>
                <br /><b id="6" class="2012">2012</b><br />
                <Image className='history2012'
                  src={history2012}
                  alt=""
                  layout="responsive"
                  sizes="100vw"
                  style={{ borderRadius: '10px' }}
                  priority
                />
                2012年度のテーマは"Flower Fairy E.coli"です。御伽噺「花咲か爺さん」のように、自由自在に花を咲かせることのできる大腸菌の開発を目指しました。アジア予選では金メダルを獲得し、見事MITで行われたWorld Championshipに出場しました。
                <Link href="https://2012.igem.org/Team:Kyoto" className="simple_square_btn2">Wiki</Link>
                <br /><b id="7" class="2013">2013</b><br />
                2013年度のテーマは"RNA Oscillator"と"Pattern Generation"です。RNA Oscillatorは、RNAを用いて点滅のような振動を表現しようとしました。Pattern Generationでは、動物の体表などに現れる模様のパターンの再現を目指しました。アジア予選では、銀メダルを獲得しました。
                <Link href="https://2013.igem.org/Team:Kyoto" className="simple_square_btn2">Wiki</Link>
                <br /><b id="8" class="2014">2014</b><br />
                2014年度のテーマは"Magnetosome Formation"と"DMS Synthesis"です。Magnetosome Formationでは磁性を持つ大腸菌を実現しようとしました。DMS Synthesisでは雨の凝結核の元となる物質であるDMSを大腸菌に生合成させることを目指しました。Giant Jamboreeでは見事金メダルを獲得しました。
                <Link href="https://2014.igem.org/Team:Kyoto" className="simple_square_btn2">Wiki</Link>
                <br /><b id="9" class="2016">2016</b><br />
                2016年度のテーマは"NORO CATCHER"です。NORO CATCHERでは、ノロウイルス治療薬開発として一石を投じるために、大腸菌の膜にノロウイルスと結合するタンパク質を発現させました。さらに食物繊維が消化されないことに着目し、セルロースと結合するタンパク質も同時発現させることで、効率的な除去を可能とし得る大腸菌を作成することに成功しました。Giant Jamboreeでは見事金メダルを獲得しました。
                <Link href="https://2016.igem.org/Team:Kyoto" className="simple_square_btn2">Wiki</Link>
                <br /><b id="10" class="2017">2017</b><br />
                <Image className='history2017'
                  src={history2017}
                  alt=""
                  layout="responsive"
                  sizes="100vw"
                  style={{ borderRadius: '10px' }}
                  priority
                />
                2017年度のテーマは"B. xylophilus Busters"です。B. xylophilus Bustersでは、マツノザイセンチュウという小さな虫にとって毒となる配列をもつRNA分子を酵母に発現させました。その虫は松を食い荒らしてしまい、松枯れ病という病気のもとになります。この酵母を緑色蛍光タンパクGFPでマーク付けし、ザイセンチュウが酵母を摂食していることを確かめたり、目的RNA分子を確実に摂食させるために、Rev-RREシステムを用いて分子を酵母核外に輸送させたりしました。大会までに期待した効果を示すことができず、Giant Jamboreeでは惜しくも銀メダルの獲得となりました。
                <Link href="https://2017.igem.org/Team:Kyoto" className="simple_square_btn2">Wiki</Link>
                <br /><b id="11" class="2018">2018</b><br />
                <Image className='history2018'
                  src={history2018}
                  alt=""
                  layout="responsive"
                  sizes="100vw"
                  style={{ borderRadius: '10px' }}
                  priority
                />
                2018年度のテーマは"Swallowyces ceerevisiae"です。酵母の液胞表面にナトリウムイオンチャネルを過剰発現することで、ナトリウムの取り込み効率の向上に取り組みました。ナトリウム濃度というのは浸透圧やタンパクの立体構造、その他チャネルの機能に大きな影響を及ぼします。この濃度を上げることは塩を加えることで解決されますが逆に下げることは難しいとされています。私たちは酵母がもともともつトランスポーターの性能を改善し新たにシロイヌナズナ、醤油酵母といったものから塩耐性にまつわる遺伝子を酵母に発現させました。大会ではGold Criteriaともなっていたparts improvementを審査員にきちんと伝えることができなかったのか、悔しくも銀メダルの受賞となりました。
                <Link href="https://2018.igem.org/Team:Kyoto" className="simple_square_btn2">Wiki</Link>
                <br /><b id="12" class="2019">2019</b><br />
                <Image className='history2019'
                  src={history2019}
                  alt=""
                  layout="responsive"
                  sizes="100vw"
                  style={{ borderRadius: '10px' }}
                  priority
                />
                2019年度のテーマは“My Clothes' Plastic”です。近年問題視されている海洋マイクロプラスチック問題、その原因の一つが洗濯した時に服から落ちる合成繊維であることがわかりました。繊維はとても小さいがために下水処理のシステムをすり抜けていきます。そのため、私たちはこの繊維を凝集させより効率的に回収しやすくさせるデバイスの開発に取り組みました。私たちはプラスチック特異的結合タンパク質をエンキャプスリンと呼ばれるタンパク質の表面に提示させることで、繊維同士を凝集させるのりのようなものの開発に成功しました。大会ではプレゼン、ポスターセッション共に高い評価を受け金賞、その上EnvironmentとBest Parts Collectionという部門賞に最終候補にノミネートされました。
                <Link href="https://2019.igem.org/Team:Kyoto" className="simple_square_btn2">Wiki</Link>
                <br /><b id="13" class="2020">2020</b><br />
                2020年度は新型コロナウイルスの影響により大会がオンラインになったため、大会には出場せず次年度への準備を進めました。
                <br /><br /><b id="14" class="2021">2021</b><br />
                <Image className='flowerver'
                  src={flowerver}
                  alt=""
                  layout="responsive"
                  sizes="100vw"
                  style={{ borderRadius: '10px' }}
                  priority
                />
                2021年度のテーマは“FLOWEREVER”です。実は私たちの身近にある花には、栽培時のウイルス感染、虫害、販売時や家庭での花の老化・細菌繁殖など様々な課題があります。これら複数の課題に対し、合成生物学を用いた解決法を考えました。ウイルス感染に対しては葉から抽出したRNAからRT-LAMP法という手法でウイルス由来のDNAを増幅し、CRISPR-Cas12aという配列検出システムを用いて蛍光の有無からウイルス感染の有無を検出する手法を開発しました。さらに機械学習を用いることで葉の写真から健康状態を判断するソフトウェアを開発しました。その他にもRNA干渉を用いた殺虫、ペプチドを利用した殺菌、生体分子の効率的生産のためのシステム開発など、取り組んだプロジェクトは多岐にわたっています。オンラインで開催された大会ではWikiとプレゼンテーションビデオを作成し、審査員とオンラインで質疑応答を行いました。結果金賞を受賞し、Best Software Toolという特別賞の最終候補にノミネートされました。
                <Link href="https://2021.igem.org/Team:Kyoto" className="simple_square_btn2">Wiki</Link>
                <br /><b id="15" class="2022">2022</b><br />
                2022年度は大会への出場を経済的理由で見送らざるを得ませんでした。
                <br /><br /><b id="16" class="2023">2023</b><br />
                <Image className='SLiCE'
                  src={SLiCE}
                  alt=""
                  layout="responsive"
                  sizes="100vw"
                  style={{ borderRadius: '10px' }}
                  priority
                />
                iGEM Kyotoのメンバーの研究が、論文として発表されました。詳細はこちらからご覧ください。
                <Link href="https://www.kyoto-u.ac.jp/ja/research-news/2023-05-17-0" className="simple_square_btn2">研究</Link>
              </p>
            </Accordion>

            <h2 id="17">iGEM について</h2>
            <Image className='iGEM2'
              src={iGEM2}
              alt=""
              layout="responsive"
              sizes="100vw"
              style={{ borderRadius: '10px' }}
              priority
            />
            <p>
              iGEM (the international Genetically Engineered Machine competition) は、合成生物学の発展への寄与を目的に世界規模で開催される学生コンテストです。
              大会では、45カ国346の学生チームが一堂に会し、研究成果を競い合います。
              <br /><br />
              実社会で問題となっているテーマの中から、それぞれの社会問題に対して合成生物学的な手法を用いた解決策を提示します。
              具体的には、環境保全や疾病診断、基礎研究など様々なプロジェクト部門に対して、多様なテーマ、切り口のもとで独創的なプロジェクトが集まります。
              <br /><br />
              各学生チームは、課題設定とプロジェクト立案、実験による検証、取材などによる実態調査を、iGEM の大会コンセプトのもと、自分たちで行います。
              コンテストにおいては、実際のデータを結果としてまとめ、それを発表する力量も求められます。
              そのため、Wikiというウェブサイト、ポスターあるいはビデオ、口頭プレゼンテーションなど複数のかたちで自分たちのプロジェクトの成果をまとめ上げ、コンテストにおける審査を受けます。
            </p>
            <p><Link href="https://igem.org" className="simple_square_btn2" >公式サイト</Link>
            </p>

            <h2 id="18">合成生物学とは</h2>
            <Image className='iGEM4'
              src={iGEM4}
              alt=""
              layout="responsive"
              sizes="100vw"
              style={{ borderRadius: '10px' }}
              priority
            />
            <p>
              合成生物学（Synthetic Biology）は、生物学の分野の一つで、生命現象を理解し、新しい生命システムを設計、構築することを目的としています。
              <br /><br />
              合成生物学は、生物学、化学、物理学、工学、情報科学など、多様な学問分野が集まって構成されています。
              合成生物学の研究には、遺伝子工学や生体分子工学など、分子レベルでの操作技術が必要です。
              また、人工細胞や人工遺伝子回路などのデバイス開発や、生命現象のモデル化におけるシステム生物学の知見も必要となります。
              <br /><br />
              合成生物学は、従来の生命科学研究において研究されてきた生命現象の解明から、それを元に新しい生命システムを設計、構築するというアプローチをとります。
              例えば、生物の代謝や細胞分裂などの生命現象を理解し、それを改変することで、医療や環境問題の解決に向けた新しい技術や製品の開発が期待されています。
              <br /><br />
              合成生物学の応用分野は広く、医療、環境、食品、エネルギーなど、多岐にわたります。
              また、合成生物学は、自然界に存在しない新しい生命体の設計、構築にも取り組んでおり、その可能性は未知数とされています。
            </p>

            <h2 id="19">iGEM の大会コンセプト</h2>
            <Image className='iGEM3'
              src={iGEM3}
              alt=""
              layout="responsive"
              sizes="100vw"
              style={{ borderRadius: '10px' }}
              priority
            />
            <p>
              iGEMは、大会においてプロジェクトで用いられた新しい機能的DNA配列を「Bio Brick」として、データベースに集積することにより、合成生物学におけるパーツの充実に寄与しています。
              <br /><br />
              また、大会では、審査基準が求める活動を通して、教育プログラムとして充実した経験の機会が与えられます。
              例えば、取材による実態調査は、研究活動において、研究室の中での空想に留まることなく現実世界における異なる立場の人々と議論することの重要性を示してくれます。
              私たちは、このような環境の中で、大学の講義だけでは知ることのできないような倫理観や思考を学んでいます。
              <br /><br />
              さらには、現地開催での大会においては、ポスターセッションにおけるディスカッションなどを通して海外の学生チームと交流する機会が与えられます。
              サイエンスを学ぶ同世代の優秀な学生の発表に生身で触れることができ、私たちにとって刺激を受ける場になっているだけでなく、コラボレーションなどを通して将来の研究者のオープンコミュニティ形成に繋がる場にもなっています。
            </p>
            <p><Link href="http://parts.igem.org/Catalog" className="simple_square_btn2" >パーツカタログ</Link>
            </p>
            <br />
          </PostBody>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <div className="hidden md:block col-span-4">
            <div className="sticky top-4">
              <TableOfContents headings={scrollbarData} />
            </div>
          </div>
        </TwoColumnSidebar>
      </TwoColumn>

    </Contain>
  )
}