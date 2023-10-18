import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Footer() {
  const legal = ["Terms", "Privacy"];
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <Image
                      src="/img/logo.svg"
                      alt="N"
                      width="32"
                      height="32"
                      className="w-8"
                    />
                  <span>Anicca Research</span>
              </Link>
            </div>

            <div className="mt-5">
              <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link key={index} href={`/${item}`} className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">      
                    {item}
                </Link>
              ))}
            </div>
            </div>
          </div>

        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
          <a
            target="_blank"
            rel="noopener">
            Anicca Research
          </a>{" "}
          Illustrations from{" "}
          <a
            href="https://undraw.co/illustrations"
            target="_blank"
            rel="noopener ">
            unDraw
          </a>
        </div>
      </Container>

    </div>
  );
}

