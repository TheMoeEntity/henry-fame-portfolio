export const films: {
  title: string;
  url: string;
  slug: string;
  content: {
    intro: string;
    description: string;
    list: { title: string; description: string }[];
  };
}[] = [
  {
    title: "Finding Jomijo",
    slug: "finding-jomijo",
    url: "https://firebasestorage.googleapis.com/v0/b/greencalbackend.appspot.com/o/Finding%20Jimijo.mp4?alt=media&token=7d685ed6-9705-44eb-8a93-d214bc227e23",
    content: {
      intro:
        "I had the incredible privilege of collaborating with some amazing creatives as part of The British Council Creative Enterprise Program. This experience was invaluable, allowing me to dive deeper into the animation industry—something I’ve always been passionate about.",
      description:
        "The project we worked on was a short film about two adventurous kids on a daring quest to prove the existence of a mythical creature. It was an exciting challenge, and I had the opportunity to contribute in multiple ways:",
      list: [
        {
          title: "Character Design",
          description:
            "I collaborated with my team to design the characters, ensuring they felt alive and fit seamlessly into our story’s world.",
        },
        {
          title: "Storyboard & Visual Development ",
          description:
            "I took the lead in drafting the initial storyboard, shaping the film’s visual narrative.",
        },
        {
          title: "Layout Design",
          description: `Alongside <a class="underline" href='https://www.instagram.com/kiks_johnson/'>@kiks_johnson</a>, we worked on the layout designs, which <a href='https://www.instagram.com/barhbie_/' class='underline'>@barhbie_</a> then elevated with her unique style.`,
        },
        {
          title: "Voice Acting",
          description:
            "I even stepped out of my comfort zone to voice one of the characters, which was both challenging and exciting.",
        },
        {
          title: "Illustrating the Movie Poster ",
          description:
            " Finally, I had the pleasure of designing the film’s poster, capturing its spirit in a single image.",
        },
      ],
    },
  },
  {
    title: "Agadi teaser",
    slug: "agadi-teaser",
    url: "https://firebasestorage.googleapis.com/v0/b/greencalbackend.appspot.com/o/Agadi%20teaser_1.mp4?alt=media&token=c2a475c1-ecf2-473f-8bf9-237f34b5b141",
    content: {
      intro:
        "As a 3D Artist & Animator Intern at Magic Lab (Magic Carpet Studio), I had the opportunity to collaborate with my co-interns on a short film project, contributing to multiple aspects of the production process. This experience deepened my skills in character design, modeling, texturing, and animation while also giving me hands-on experience working within a professional animation pipeline.",
      description: "",
      list: [
        {
          title: "Character Development",
          description:
            "Designed, sculpted, textured, and modeled the characters, ensuring they aligned with the artistic vision, with final refinements made by the director. <a class='font-medium underline' href='https://www.instagram.com/guru.animation/'>Duru Azubuike</a>",
        },
        {
          title: "Rigging Support",
          description:
            "Assisted the riggers ( <a class='underline font-medium' href='https://www.instagram.com/n003_animation/'>Jasmin Galadima, </a><a href='https://www.instagram.com/christ_mindset/' class='font-medium underline'>Nicolas Ogah</a>) in setting up one of the characters for animation, gaining valuable insight into character movement and deformation.",
        },
        {
          title: "Environment and Asset Creation",
          description:
            "Supported the environment artist ( <a class='underline font-medium' href='https://www.instagram.com/brianifidon.ztl/'>Esen Unukogbon Brian Ifidon</a>) by modeling various assets, contributing to the film’s overall visual design.",
        },
        {
          title: "Animated",
          description:
            "Animated several scenes, refining my storytelling and motion skills, even though some sequences were not included in the final cut.",
        },
      ],
    },
  },
];
