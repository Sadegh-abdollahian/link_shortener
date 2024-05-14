"use client";

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
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { fakeShortLinksData } from "@/constants";
import { useAuth } from "@clerk/nextjs";
import { getUserLinks } from "@/lib/getLinks";
import { useEffect, useState } from "react";

const HistoryTable = () => {
  const { userId } = useAuth();
  const [userLinks, setUserLinks] = useState([]);

  // get all user's links if user is signed in
  useEffect(() => {
    const getUserData = async () => {
      try {
        if (userId) {
          const urls = await getUserLinks(userId);
          setUserLinks(urls);
        }
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, []);

  const copyToClipboard = async (copyValue) => {
    navigator.clipboard.writeText(copyValue);
  };

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
              Available Clicks
            </TableHead>
            <TableHead className="text-light w-1/12 text-center max-xl:hidden">
              Date
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userLinks
            ? userLinks.map((link, index) => {
                return (
                  <TableRow
                    key={index}
                    className="h-[65px] border border-b-2 border-transparent border-b-neutral-800 bg-[#0B101B] max-md:h-[45px]"
                  >
                    <TableCell className="text-light small-13-bold max-md:small-13-normal">
                      <div className="flex items-center gap-x-4 max-sm:hidden">
                        {"https://linkly.com/" + link.shortLink}
                        <Button
                          onClick={() =>
                            copyToClipboard(
                              `https://linkly.com/${link.shortLink}`
                            )
                          }
                          className="background-gray flex-center size-[35px] rounded-full"
                        >
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
                          src={
                            "https://favicon.twenty.com/" +
                            link.originalLink.replace("https://", "") +
                            "/32"
                          }
                          width={35}
                          height={35}
                          className="rounded-full"
                          alt={link.originalLink}
                        />
                        {link.originalLink}
                      </div>
                    </TableCell>
                    <TableCell className="text-light small-13-normal text-center max-lg:hidden">
                      {link.availableClicks}
                    </TableCell>
                    <TableCell className="text-light small-13-normal text-center max-xl:hidden">
                      {link.createdAt.toLocaleDateString().replaceAll("/", "-")}
                    </TableCell>
                  </TableRow>
                );
              })
            : null}
        </TableBody>
      </Table>
      {/* Mobile size Accordion */}
      <div className="hidden max-sm:block">
        <div className="background-gray flex h-14 items-center pl-5">
          <h2 className="text-light small-13-bold">Shorten Links</h2>
        </div>
        <Accordion type="single" collapsible>
          {userLinks
            ? userLinks.map((link, index) => {
                return (
                  <AccordionItem
                    key={index}
                    value={index + 1}
                    className="text-light divide-y divide-solid divide-[#0B101B] bg-[#0E131D]"
                  >
                    <AccordionTrigger className="mx-2">
                      {/* <div className="small-13-normal flex items-center gap-x-2 truncate">
                        {"https://linkly.com/" + link.shortLink}
                        <div
                          onClick={() =>
                            copyToClipboard(
                              `https://linkly.com/${link.shortLink}`
                            )
                          }
                          className="background-gray flex-center size-[35px] rounded-full"
                        >
                          <FontAwesomeIcon
                            icon={faCopy}
                            size="md"
                            style={{ color: "#C9CED6" }}
                          />
                        </div>
                      </div> */}
                    </AccordionTrigger>
                    <AccordionContent className="small-13-normal flex-center h-[60px] p-0">
                      {/* <div className="flex w-full items-center justify-around">
                        <Image
                          src={
                            "https://favicon.twenty.com/" +
                            link.originalLink.replace("https://", "") +
                            "/64"
                          }
                          width={30}
                          height={30}
                          className="rounded-full"
                          alt={link.originalLink}
                        />
                        <p className="w-10/12 truncate">{link.originalLink}</p>
                      </div> */}
                    </AccordionContent>
                  </AccordionItem>
                );
              })
            : null}
        </Accordion>
      </div>
    </div>
  );
};

export default HistoryTable;
