import Image from "next/image";
import thumbnail from "../public/images/thumbnail.svg";
const Footer = () => {
  return (
    <footer>
      <div className="flex items-center justify-center flex-col bg-[#0f171e] p-8">
        <div>
          <Image src={thumbnail} width="120" alt="image" />
        </div>
        <div className="flex items-center justify-center gap-4 text-[#79b8f3] my-4 flex-col md:flex-row">
          <span>Terms and Privacy Notice</span>
          <span>Send us feedback</span>
          <span>Help</span>
          <span className="text-[#8197a4]">
            © 1996-2023, Amazon.com, Inc. or its affiliates
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
