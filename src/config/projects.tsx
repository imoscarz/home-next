import { Icons } from "@/components/icons";

export const projects = [
  {
    title: "Open-Sora",
    href: "https://github.com/hpcaitech/Open-Sora",
    dates: "Mar. 2024 - Mar. 2025",
    active: true,
    description:
      "The world's first open-source Sora-like video generation model — bringing efficient, high-quality video production to everyone.",
    technologies: [],
    authors: "",
    links: [
      {
        type: "Github",
        href: "https://github.com/hpcaitech/Open-Sora",
        icon: <Icons.github className="size-3" />,
      },
      {
        type: "Open-Sora 1.2",
        href: "https://arxiv.org/abs/2412.20404",
        icon: <Icons.paper className="size-3" />,
      },
      {
        type: "Open-Sora 2.0",
        href: "https://arxiv.org/abs/2503.09642",
        icon: <Icons.paper className="size-3" />,
      },
    ],
    image: "/proj-open-sora.png",
    video: "",
  },
  {
    title: "VideoOcean Video Agent",
    href: "https://video-ocean.com/en/agent",
    dates: "Jun. 2025 - Present",
    active: true,
    description:
      "VideoOcean Video Agent generates videos up to minutes with a few clicks, including voice and face.",
    technologies: [],
    authors: "",
    links: [
      {
        type: "Website",
        href: "https://video-ocean.com/en/agent",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "",
    video: "https://files.zangwei.dev/proj-video-agent.mp4",
  },
  {
    title: "VideoOcean",
    href: "https://video-ocean.com/app",
    dates: "April 2025 - Present",
    active: true,
    description:
      "VideoOcean is a video generation platform that allows you to generate videos, images and audios with state-of-the-art models.",
    technologies: [],
    authors: "",
    links: [
      {
        type: "Website",
        href: "https://video-ocean.com/app",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/proj-video-ocean.png",
    video: "",
  },
  {
    title: "ColossalChat",
    href: "https://github.com/hpcaitech/ColossalAI/tree/main/applications/ColossalChat",
    dates: "Mar. 2023",
    active: true,
    description:
      "ColossalChat is a project to implement LLM with RLHF, powered by the Colossal-AI.",
    technologies: [],
    authors: "",
    links: [
      {
        type: "Github",
        href: "https://github.com/hpcaitech/ColossalAI/tree/main/applications/ColossalChat",
        icon: <Icons.github className="size-3" />,
      },
      {
        type: "Blog",
        href: "https://medium.com/pytorch/colossalchat-an-open-source-solution-for-cloning-chatgpt-with-a-complete-rlhf-pipeline-5edf08fb538b",
        icon: <Icons.newspaper className="size-3" />,
      },
    ],
    image: "/proj-colossalchat.png",
    video: "",
  },
  {
    title: "Instruction in the Wild",
    href: "https://github.com/XueFuzhao/InstructionWild",
    dates: "Apr. 2024",
    active: true,
    description:
      "This project focuses on building a larger and more diverse instruction dataset by collecting 110K instructions from shared ChatGPT usage.",
    technologies: [],
    authors: "",
    links: [
      {
        type: "Github",
        href: "https://github.com/XueFuzhao/InstructionWild",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/proj-inst-wild.png",
    video: "",
  },
  {
    title: "Sequence Schedule",
    href: "https://arxiv.org/abs/2305.13144",
    dates: "NeurIPS 2023",
    active: true,
    description:
      "Discovered that LLMs can foresee their response length — leading to Sequence Scheduling, an efficient LLM batch inference technique.",
    technologies: [],
    authors:
      "**Authors:** **Zangwei Zheng**, Xiaozhe Ren, Fuzhao Xue, Yang Luo, Xin Jiang, Yang You",
    links: [
      {
        type: "Paper",
        href: "https://arxiv.org/abs/2305.13144",
        icon: <Icons.paper className="size-3" />,
      },
      {
        type: "Github",
        href: "https://github.com/zhengzangw/Sequence-Scheduling",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/proj-sequence-schedule.png",
    video: "",
  },
  {
    title: "Zero-Shot Continual Learning",
    href: "https://arxiv.org/abs/2303.06628",
    dates: "ICCV 2023",
    active: true,
    description:
      "A new benchmark and method to mitigate forgetting problem existed in the continual learning of large pretrained vision-language models.",
    technologies: [],
    authors:
      "**Authors:** **Zangwei Zheng**, Mingyuan Ma, Kai Wang, Ziheng Qin, Xiangyu Yue, Yang You",
    links: [
      {
        type: "Paper",
        href: "https://arxiv.org/abs/2303.06628",
        icon: <Icons.paper className="size-3" />,
      },
      {
        type: "Github",
        href: "https://github.com/Thunderbeee/ZSCL",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/proj-zscl.png",
    video: "",
  },
  {
    title: "CowClip Optimizer",
    href: "https://arxiv.org/abs/2204.06240",
    dates: "AAAI 2023",
    active: true,
    description:
      "An optimizer that can train CTR prediction models with large batch (~128k)",
    technologies: [],
    authors:
      "**Authors:** **Zangwei Zheng**, Pengtai Xu, Xuan Zou, Da Tang, Zhen Li, Chenguang Xi, Peng Wu, Leqi Zou, Yijie Zhu, Ming Chen, Xiangzhuo Ding, Fuzhao Xue, Ziheng Qin, Youlong Cheng, Yang You",
    links: [
      {
        type: "Paper",
        href: "https://arxiv.org/abs/2204.06240",
        icon: <Icons.paper className="size-3" />,
      },
      {
        type: "Github",
        href: "https://github.com/bytedance/LargeBatchCTR",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/proj-cowclip.png",
    video: "",
  },
  {
    title: "PCS Learning",
    href: "https://arxiv.org/abs/2103.16765",
    dates: "CVPR 2021",
    active: true,
    description:
      "An end-to-end Prototypical Cross-domain Self-Supervised Learning (PCS) framework for Few-shot Unsupervised Domain Adaptation (FUDA).",
    technologies: [],
    authors:
      "**Authors:** Xiangyu Yue, **Zangwei Zheng** (co-first-author), Shanghang Zhang, Yang Gao, Trevor Darrell, Kurt Keutzer, Alberto Sangiovanni Vincentelli",
    links: [
      {
        type: "Paper",
        href: "https://arxiv.org/abs/2103.16765",
        icon: <Icons.paper className="size-3" />,
      },
      {
        type: "Blog",
        href: "https://xyue.io/pcs-fuda/index.html",
        icon: <Icons.newspaper className="size-3" />,
      },
      {
        type: "Github",
        href: "https://github.com/zhengzangw/PCS-FUDA",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/proj-pcs-fuda.png",
    video: "",
  },
] as const;
