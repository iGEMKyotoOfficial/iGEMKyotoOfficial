import Frame from "components/member.people";
import hayamatsu from "images/member.2022/2022_hayamatsu.jpg";
import abe from "images/member.2022/2022_abe.jpg";
import ishibashi from "images/member.2022/2022_ishibashi.jpg";
import kawakami from "images/member.2022/2022_kawakami.jpg";
import goto from "images/member.2022/2022_goto.jpg";
import sekikawa from "images/member.2022/2022_sekikawa.jpg";
import tsuchida from "images/member.2022/2022_tsuchida.jpg";
import hayashi from "images/member.2022/2022_hayashi.jpg";
import fukuoka from "images/member.2022/2022_fukuoka.jpeg";
import fukushima from "images/member.2022/2022_fukushima.jpg";
import maeta from "images/member.2022/2022_maeta.jpg";
import mitoma from "images/member.2022/2022_mitoma.jpg";
import mihara from "images/member.2022/2022_mihara.jpg";
import jana from "images/member.2022/2022_jana.jpg";

export default function Member() {
  return (
    <>
      <Frame subtitle="早松 龍正 (Ryusei HAYAMATSU)" src={hayamatsu}>
        Sophomore of the Department of Applied Life Science, the Faculty of
        Agriculture, Kyoto University <br />
        <b>Team Leader</b> <br />俺
      </Frame>
      <br />
      <Frame subtitle="阿部 惇之介 (Junnosuke ABE)" src={abe}>
        Freshman of the Department of Civil, Environmental and Resources
        Engineering, the Faculty of Engineering, Kyoto University <br />
        驚くべき自己紹介の原稿を提案したが却下されました
      </Frame>
      <br />
      <Frame subtitle="石橋 凌平 (Ryohei ISHIBASHI)" src={ishibashi}>
        Freshman of the Faculty of Science, Kyoto University <br />
        Standing on the Shoulder of Giants
      </Frame>
      <br />
      <Frame subtitle="川上 咲季 (Saki KAWAKAMI)" src={kawakami}>
        Junior of the Department of Applied Life Science, the Faculty of
        Agriculture, Kyoto University <br />
        ふうむ
      </Frame>
      <br />
      <Frame subtitle="後藤 優理子 (Yuriko GOTO)" src={goto}>
        Freshman of the Department of Applied Life Science, the Faculty of
        Agriculture, Kyoto University <br />
      </Frame>
      <br />
      <Frame subtitle="関川 隆 (Ryu SEKIKAWA)" src={sekikawa}>
        Sophomore of the Department of Medicine, the Faculty of Medicine, Kyoto
        University <br />
        一般的な変人京大生です
      </Frame>
      <br />
      <Frame subtitle="土田 美咲 (Misaki TSUCHIDA)" src={tsuchida}>
        Freshman of the Department of Applied Life Science, the Faculty of
        Agriculture, Kyoto University <br />
        If I were born again, I'd want to be a sweet potato.
      </Frame>
      <br />
      <Frame subtitle="林 泰瑶 (Taiyo HAYASHI)" src={hayashi}>
        Junior of the Faculty of Science, Kyoto University <br />
        好きこそ物の上手なれ
      </Frame>
      <br />
      <Frame subtitle="	福岡 大空 (Taku FUKUOKA)" src={fukuoka}>
        Freshman of the Department of Forest and Biomaterials Science, the
        Faculty of Agriculture, Kyoto University <br />
        牡丹
      </Frame>
      <br />
      <Frame subtitle="福嶋 陸斗 (Rikuto FUKUSHIMA)" src={fukushima}>
        Junior of the Faculty of Science, Kyoto University <br />
        ぐるぐる
      </Frame>
      <br />
      <Frame subtitle="前田 佳穂 (Kaho MAETA)" src={maeta}>
        Sophomore of the Department of Applied Life Science, the Faculty of
        Agriculture, Kyoto University <br />
        知好楽
      </Frame>
      <br />
      <Frame subtitle="三笘 隼人 (Hayato MITOMA)" src={mitoma}>
        Freshman of the Faculty of Science, Kyoto University <br />
        Udon and soba taste the same
      </Frame>
      <br />
      <Frame subtitle="三原 一星 (Issei MIHARA" src={mihara}>
        Freshman of the Faculty of Science, Kyoto University <br />
        夜更かしと寝坊のtwo-way player
      </Frame>
      <br />
      <Frame subtitle="モンタネズ マリヤナ (Marjana MONTANEZ)" src={jana}>
        Sophomore of the Department of Industrial Chemistry, the Faculty of
        Engineering, Kyoto University <br />
        日本語上手やな
      </Frame>
    </>
  );
}
