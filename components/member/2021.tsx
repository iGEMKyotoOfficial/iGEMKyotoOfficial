import Frame from "components/member.people";
import Link from "next/link";
import fukushima from "images/member.2021/2021_fukushima.jpg";
import goya from "images/member.2021/2021_goya.jpg";
import hayashi from "images/member.2021/2021_hayashi.jpg";
import hayashida from "images/member.2021/2021_hayashida.jpg";
import morita from "images/member.2021/2021_morita.jpg";
import hirota from "images/member.2021/2021_hirota.jpg";
import kawakami from "images/member.2021/2021_kawakami.jpg";
import kobayashi from "images/member.2021/2021_kobayashi.jpg";
import koga from "images/member.2021/2021_koga.jpg";
import liu from "images/member.2021/2021_liu.jpeg";
import maeta from "images/member.2021/2021_maeta.jpg";
import nakaji from "images/member.2021/2021_nakaji.jpg";
import nishizawa from "images/member.2021/2021_nishizawa.jpg";
import tajima from "images/member.2021/2021_tajima.jpg";
import tamukai from "images/member.2021/2021_tamukai.jpg";
import tamura from "images/member.2021/2021_tamura.jpg";
import tanaka from "images/member.2021/2021_tanaka.jpg";
import ueda from "images/member.2021/2021_ueda.jpg";

export default function Member() {
  return (
    <>
      <h1>Theme: FLOWEREVER</h1>
      <br />
      <Link href="https://2021.igem.org/Team:Kyoto" className="btn btn-border">
        Wiki
      </Link>

      <Frame subtitle="福嶋 陸斗 (Rikuto FUKUSHIMA)" src={fukushima}>
        Sophomore of the Faculty of Science, Kyoto University <br />
        <b>Team Leader</b> <br />
        Connecting the dots
      </Frame>
      <br />
      <Frame subtitle="	植田 悠斗 (Yuto UEDA)" src={ueda}>
        Sophomore of the Faculty of Science, Kyoto University <br />
        2021年度の実験リーダーを務めています。どうぞよろしくお願いします。さよなら
      </Frame>
      <br />
      <Frame subtitle="	小林 勇毅 (Yuki KOBAYASHI)" src={kobayashi}>
        Senior of the Faculty of Science, Kyoto University <br />
        常に新しいモノに触れて
      </Frame>
      <br />
      <Frame subtitle="	田向 健人 (Kento TAMUKAI)" src={tamukai}>
        Senior of the Faculty of Pharmacy, Kyoto University <br />
        Only output is work.
      </Frame>
      <br />
      <Frame subtitle="	田島 奈桜 (Nao TAJIMA)" src={tajima}>
        Junior of the Department of Applied Life Sciences, Faculty of
        Agriculture, Kyoto University <br />
        睡眠とネコ
      </Frame>
      <br />
      <Frame subtitle="	西澤 知里 (Chisato NISHIZAWA)" src={nishizawa}>
        Junior of the Department of Applied Life Sciences, Faculty of
        Agriculture, Kyoto University <br />
        Be powerful like a flower.
      </Frame>
      <br />
      <Frame subtitle="	林田 ももこ (Momoko HAYASHIDA)" src={hayashida}>
        Junior of the Department of Applied Life Sciences, Faculty of
        Agriculture, Kyoto University <br />
        1UPしたい
      </Frame>
      <br />
      <Frame subtitle="	アレクサンダー Y. リュウ (Alexander Y. LIU)" src={liu}>
        Junior of the Faculty of Science, Kyoto University <br />
        Throwing out the key and just living in a dream
      </Frame>
      <br />
      <Frame subtitle="	川上 咲季 (Saki KAWAKAMI)" src={kawakami}>
        Sophomore of the Department of Bioresource Sciences, Faculty of
        Agriculture, Kyoto University <br />
      </Frame>
      <br />
      <Frame subtitle="	合屋 智尋 (Chihiro GOYA)" src={goya}>
        Sophomore of the Department of Medicine, Faculty of Medicine, Kyoto
        University <br />
        きなななななななこアイスたべたい
      </Frame>
      <br />
      <Frame subtitle="	古賀 大翔 (Hiroto KOGA) " src={koga}>
        Sophomore of the Faculty of Science, Kyoto University <br />
        アサガオと共に生きる
      </Frame>
      <br />
      <Frame subtitle="	田中 風帆 (Kaho TANAKA) " src={tanaka}>
        Sophomore of the Department of Informatics and Mathematical Science,
        Faculty of Engineering, Kyoto University <br />
        ドラえもん！
      </Frame>
      <br />
      <Frame subtitle="	田村 響 (Hibiki TAMURA)" src={tamura}>
        Sophomore of the Department of Human Health Science, Faculty of
        Medicine, Kyoto University <br />
        フリーアイコン募集中
      </Frame>
      <br />
      <Frame subtitle="	林 泰瑶 (Taiyo HAYASHI)" src={hayashi}>
        Sophomore of the Faculty of Science, Kyoto University <br />
        Go big or stay home.
      </Frame>
      <br />
      <Frame subtitle="	廣田 亮太郎 (Ryotaro HIROTA)" src={hirota}>
        Sophomore of the Faculty of Science, Kyoto University <br />
        おはようじょ
      </Frame>
      <br />
      <Frame subtitle="	中路 和良 (Kazuyoshi NAKAJI)" src={nakaji}>
        Sophomore of the Faculty of Science, Kyoto University <br />
        King Gnu 白目
      </Frame>
      <br />
      <Frame subtitle="	前田 佳穂 (Kaho MAETA)" src={maeta}>
        Freshman of the Department of Applied Life Sciences, Faculty of
        Agriculture, Kyoto University <br />
        諸行無常
      </Frame>
      <br />
      <Frame subtitle=" 森田 歩 (Ayumi MORITA)" src={morita}>
        Freshman of the Department of Human Health Science, Faculty of Medicine,
        Kyoto University <br />
        愛と勇気とホメオスタシス
      </Frame>
    </>
  );
}
