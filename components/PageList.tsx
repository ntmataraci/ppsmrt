import A1_1 from "../modals/A1_1";
import A1_2 from "../modals/A1_2";
import A1_3 from "../modals/A1_3";
import A1_4 from "../modals/A1_4";
import A2_1 from "../modals/A2_1";
import A2_2 from "../modals/A2_2";
import A2_3 from "../modals/A2_3";
import A2_4 from "../modals/A2_4";
import React, { FC } from "react";
import A3_1 from "../modals/A3_1";
import A3_2 from "../modals/A3_2";
import A3_3 from "../modals/A3_3";
import A3_4 from "../modals/A3_4";
import B1_1 from "../modals/B1_1";
import B1_2 from "../modals/B1_2";
import B1_3 from "../modals/B1_3";
import B1_4 from "../modals/B1_4";
import B2_1 from "../modals/B2_1";
import B2_2 from "../modals/B2_2";
import B2_3 from "../modals/B2_3";
import B2_4 from "../modals/B2_4";
import B3_1 from "../modals/B3_1";
import B3_2 from "../modals/B3_2";
import B3_3 from "../modals/B3_3";
import B3_4 from "../modals/B3_4"
import C1_1 from "../modals/C1_1"

type listArr = [x: string];

const page1: ((x: string) => any)[] = [
  (x) => <A1_1 name={x} />,
  (x) => <A1_2 name={x} />,
  (x) => <A1_3 name={x} />,
  (x) => <A1_4 name={x} />,
  (x) => <A2_1 name={x} />,
  (x) => <A2_2 name={x} />,
  (x) => <A2_3 name={x} />,
  (x) => <A2_4 name={x} />,
  (x) => <A3_1 name={x} />,
  (x) => <A3_2 name={x} />,
  (x) => <A3_3 name={x} />,
  (x) => <A3_4 name={x} />,
];
const page2: ((x: string) => any)[] = [
  (x) => <B1_1 name={x} />,
  (x) => <B1_2 name={x} />,
  (x) => <B1_3 name={x} />,
  (x) => <B1_4 name={x} />,
  (x) => <B2_1 name={x} />,
  (x) => <B2_2 name={x} />,
  (x) => <B2_3 name={x} />,
  (x) => <B2_4 name={x} />,
  (x) => <B3_1 name={x} />,
  (x) => <B3_2 name={x} />,
  (x) => <B3_3 name={x} />,
  (x) => <B3_4 name={x} />,
];
const page3: ((x: string) => any)[] = [
  (x) => <C1_1 name={x} />,
];

export const pageIndex = [page1, page2, page3];
export const allPages: any = [...page1, ...page2, ...page3];
