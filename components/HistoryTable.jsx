// shadcn tabel
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// shadcn accordion
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
// others
import qrcode from "../public/assets/images/qrcode.png";
import twitterImg from "../public/assets/images/twitter.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HistoryTable = () => {
  return (
    <div className="w-10/12 overflow-hidden rounded-t-lg">
      {/* Desktop and Tablet size table */}
      <Table className="max-sm:hidden">
        <TableHeader className="background-gray h-[65px] max-md:h-[45px]">
          <TableRow className="border-transparent">
            <TableHead className="text-light w-4/12 text-start">
              Short Link
            </TableHead>
            <TableHead className="text-light w-4/12 max-sm:hidden">
              Original Link
            </TableHead>
            <TableHead className="text-light w-1/12 text-center max-lg:hidden">
              QR-Code
            </TableHead>
            <TableHead className="text-light w-1/12 text-center max-xl:hidden">
              Date
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="h-[65px] border border-b-2 border-transparent border-b-neutral-800 bg-[#0B101B] max-md:h-[45px]">
            <TableCell className="text-light small-13-bold max-md:small-13-normal">
              <div className="flex items-center gap-x-4 max-sm:hidden">
                https://linkly.com/Bn41aCOlnxj
                <Button className="background-gray flex-center size-[35px] rounded-full">
                  <FontAwesomeIcon
                    icon={faCopy}
                    size="lg"
                    style={{ color: "#C9CED6" }}
                  />
                </Button>
              </div>
            </TableCell>
            <TableCell className="text-light small-13-normal max-sm:hidden">
              <div className="flex items-center gap-x-2">
                <Image
                  src={twitterImg}
                  width={35}
                  height={35}
                  className="rounded-full"
                  alt="twitter"
                />
                https://www.twitter.com/tweets/8erelCoihu/
              </div>
            </TableCell>
            <TableCell className="text-light flex justify-center max-lg:hidden">
              <Image src={qrcode} width={35} height={35} alt="qrcode" />
            </TableCell>
            <TableCell className="text-light small-13-normal text-center max-xl:hidden">
              Oct-10-2023
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {/* Mobile size Accordion */}
      <div className="hidden max-sm:block">
        <div className="background-gray flex h-16 items-center pl-5">
          <h2 className="text-light small-13-bold">Shorten Links</h2>
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem
            value="1"
            className="text-light divide-y divide-solid divide-[#0B101B] bg-[#0E131D]"
          >
            <AccordionTrigger className="mx-2">
              <div className="flex items-center gap-x-2">
                <a
                  href="/"
                  target="_blank"
                  className="small-13-normal w-9/12 truncate"
                >
                  https://linkly.com/Bn41aCOlnxj
                </a>
                <div className="background-gray flex-center size-[35px] rounded-full">
                  <FontAwesomeIcon
                    icon={faCopy}
                    size="md"
                    style={{ color: "#C9CED6" }}
                  />
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="small-13-normal flex-center h-[60px] p-0">
              <div className="flex-center w-full">
                <Image src={twitterImg} width={30} height={30} alt="twitter" />
                <p className="w-10/12 truncate">
                  https://www.twitter.com/tweets/8erelCoihu/
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default HistoryTable;
