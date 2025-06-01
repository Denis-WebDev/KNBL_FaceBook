"use server";

import {publishPost} from "@/server/controler";

export const publishPost_Actions = async (req) => await publishPost(req);