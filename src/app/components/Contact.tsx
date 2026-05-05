
import { Mail, ExternalLink, GraduationCap } from "lucide-react";
import Section from "./Section";

export default function Contact() {
  return (
    <Section
      id="contato"
      title="Contato"
      subtitle="Links profissionais e canais formais."
    >
      <div className="rounded-3xl border border-rose-200 bg-white p-6 shadow-sm md:p-8">
        <ul className="space-y-4 text-sm md:text-base">
          <li className="flex items-center gap-3 rounded-2xl border border-rose-100 bg-rose-50/60 p-4">
            <Mail size={20} className="shrink-0 text-rose-700" />

            <div>
              <span className="block font-medium text-rose-700">Email</span>
              <a
                href="mailto:mariaclaralobof@gmail.com"
                className="text-rose-600 hover:text-rose-700 hover:underline"
              >
                mariaclaralobof@gmail.com
              </a>
            </div>
          </li>

          <li className="flex items-center gap-3 rounded-2xl border border-rose-100 bg-rose-50/60 p-4">
            <GraduationCap size={20} className="shrink-0 text-rose-700" />

            <div>
              <span className="block font-medium text-rose-700">Lattes</span>
              <a
                href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K1227512E5&tokenCaptchar=0cAFcWeA6rXwnReJZScvzGgbfo6eFmwdEtKsNeAanm3oNJ5rLBvssspwHH3NSStcz079M4aEquOItBkAsH_5COZOOnWsQO_j7q6SsVXTo5CvEDPiPiM5sa1cWcpYanFOyBhDijNZfnvwRnbwqUi7zTz4hfR2QKK9nuYgxB7uzAwk7szam60FXlcxQZ_b5ZoIBWnyLVGyVLojQNt7RtjsKZVI7oYgCuKt2jz-C8AWdJ4BvUhn2hLweCwCXrJtDtcSQVEuSMwCOeKiUp5y7_JueL3aRwEmz8YcquWyvoNacdGv4cW3PNHvgVSLsKfmAkZbaK8uVnWJyonCs0gCeMYAIFwFp5RJD4HioF4vbLGUq6H6b56gtGN33fIxY-oLEahVrXAlfMzruoZEMmAmNmdn1i16z7cBUOy67Ve-Iw0DsV29yGnV7iXS8TlU2zux3vLnZ55ROePb5ntLVt40iUoVjZeqaB42flMPwCB_85zrVj7rY9054-e6WyRQpnUkp7JK39pDkiZKzL8Silmnalj_P7NYXw9W_ziJaQAtwSBNjSfOQx8_QNXFMCKkffR9hju56GqGLwAztsKV2wchCfOJtRareSDAiBlISmn0CAGBphCo5QNcnQn-WoViUrYncWaQhBwwHzPvOW7Eemg2ze4CccrsavKeHNfclnq6tfY4DS5pEi3NPysxwkkm5v3wKq4JD2pKENwdq7VK9GaGvwxZCB75TZU0ZDpAu8fI85evPan7cyjO0cKFDhk2DKSq2VeKZlyXJK94Y-o-SkbZrsGfO7ZdSp3tMtgHP083Lhw1j8e1Mn4KzeyvtbM3LfjDnieerxU04nsNwrhFj-nVMUgmt_yxWlK88BYv3BiAyxBm9_tGiwnkqWHo20eeCPWNopVgx2M51BsvM0jyM5oQaR_m10mTPibXH8mW25YOJkNhIz3Szi7xlMwLJjCxE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-rose-600 hover:text-rose-700 hover:underline"
              >
                Currículo Lattes
                <ExternalLink size={14} />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </Section>
  );
}

