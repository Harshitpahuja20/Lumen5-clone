import { Button, Heading, Text } from "@chakra-ui/react";
import Banner from "../Components/Banner";
import Banner1 from "../Images/Banner1.png";
import uName_logo from "../Images/uName_logo.png";
import cName_logo from "../Images/cName_logo.png";
import TName_logo from "../Images/TName_logo.png";
import Avtar from "../Images/Avtar.jpg";
import Avtar2 from "../Images/Avtar2.jpg";
import Avtar3 from "../Images/Avtar3.jpg";
import Banner2 from "../Images/Banner2.png";
import Banner3 from "../Images/Banner3.png";
import Banner4 from "../Images/Banner4.png";
import enterprise1 from "../Images/enterprise1.png";
import enterprise2 from "../Images/enterprise2.png";
import enterprise3 from "../Images/enterprise3.png";
import enterprise4 from "../Images/enterprise4.png";

export const ImagesSrc = [
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-salesforce-color.png",
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-pwc-color.png",
  "https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/gnb-desktop-120x32.png",
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-kpmg-color.png",
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-merk-color.png",
  "https://in-media.apjonlinecdn.com/logo/stores/1/HP_logo_black_1.svg",
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-mitsubishi-color.png",
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-color.png",
];

export const videoSrc = [
  "https://storage.googleapis.com/lumen5-site-images/prev_tracer.mp4",
  "https://storage.googleapis.com/lumen5-site-images/prev_billow.mp4",
  "https://storage.googleapis.com/lumen5-site-images/prev_vertex.mp4",
  "https://storage.googleapis.com/lumen5-site-images/prev_circuit.mp4",
  "https://storage.googleapis.com/lumen5-site-images/prev_vault.mp4",
  "https://storage.googleapis.com/lumen5-site-images/prev_notice.mp4",
  "https://storage.googleapis.com/lumen5-site-images/flux_prev.mp4",
  "https://storage.googleapis.com/lumen5-site-images/unity_prev.mp4",
  "https://storage.googleapis.com/lumen5-site-images/looper_prev.mp4",
  "https://storage.googleapis.com/lumen5-site-images/siemens_prev.mp4",
  "https://storage.googleapis.com/lumen5-site-images/salesforce_prev.mp4",
  "https://storage.googleapis.com/lumen5-site-images/viasat_prev.mp4",
  "https://storage.googleapis.com/lumen5-site-images/storaenso_prev.mp4",
];

export const contact =  [ "About" , "features" , "careers" , "Linkedin" , "Support" , "ProductUpdates" , "Add Text to Video" , "Cut Video" , "Merge Video" , "Compress Video" , "Resize Video" , "Video Editor" , "Photo Video Maker" , "Facebook Video Maker" , "YouTube Intro Maker" , "Instagram Video Maker" , "See All" , "See all" ];

export const reviewData = [
  {
    Cname:"Siemens",
    reveiew:"“One of the goals of the company is to help our customers in their digital transformation, Lumen5 helps us in getting more digital in our communications—that’s part of the digital transformation.”",
    image:"https://storage.googleapis.com/lumen5-site-images/website-assets/guenter-siemens.jpeg",
    name:"Guenter Gaugler",
    post : "Head of Content Production"
  },
  {
    Cname:"Mitsubishi",
    reveiew: "“Thanks to Lumen5, we have been able to cut down on time and costs for video making. We don’t have to go through a third party which speeds everything up and makes our work a lot easier.”",
    image:"https://storage.googleapis.com/lumen5-site-images/website-assets/adrian-mitsubishi.jpg",
    name:"Adrian Ngo",
    post : "Global Advertising and Sponsorships"
  },
  {
    Cname:"Cisco",
    reveiew:"“At Cisco we try to share lots of multimedia content and new types of content like memes, graphics and videos. And the videos by far give us the most engagement, thanks to Lumen5.”",
    image:"https://storage.googleapis.com/lumen5-site-images/website-assets/eric-cisco.jpeg",
    name:"Eric Chu",
    post : "Social and Digital Content Manager"
  },
]

export const priceData = [
  {
    name:"Community",
    type:"For casual video enthusiasts",
    price:"$0",
    maintainence : "Forever Free",
    save:"",
    Link:"/main",
    Benefits : [
      "Unlimited videos",
      "Contains Lumen5 watermark",
      "720p video resolution",
    ]
  },
  {
    name:"Basic",
    type:"For creating simple unbranded videos",
    price:"$19 USD",
    maintainence : "per month, billed yearly",
    save:"",
    Link:"/payment",
    Benefits : [
      "No Lumen5 branding",
      " Access to icons",
    ]
  },
  {
    name:"Starter",
    type:"For the individual content creator",
    price:"$59 USD",
    maintainence : "per month, billed yearly",
    save:"Save 25%",
    Link:"/payment",
    Benefits : [
      " 50M stock photos & videos",
      "Custom colors & styles",
      "1080p video resolution",
    ]
  },
  {
    name:"Professional",
    type:"For the professional video storyteller",
    price:"$149 USD",
    maintainence : "per month, billed yearly",
    save:"Save 25%",
    Link:"/payment",
    Benefits : [
      "500M stock photos & videos",
      "Custom watermarks",
      " Upload your own fonts",
      "Multiple saved templates",
      "Multiple brand kits",
    ]
  },
  {
    name:"Enterprise",
    type:"For marketing & communication teams",
    price:"Custom",
    maintainence : "",
    save:"",
    Link:"/enterprise",
    Benefits : [
      "Lumen5 design team",
      "Bespoke branded templates",
      "Dedicated customer success",
      "Teams & collaboration",
      "Enterprise-level security",
    ]
  },
]




export const BannerData1 = (
  <Banner
    src={Banner1}
    width={{ base: "max-content", md: "400px" }}
    wrap={{ base: "wrap", md: "nowrap", lg: "nowrap" }}
    Second_box="none"
    heading="Video maker built to supercharge your content strategy"
    text={
      <Text as="span" fontSize={20}>{" "}
        Easily make videos for <Text as="span" fontWeight="bold">
          {` content marketing, thought leadership, and brand awareness `}
        </Text> in a snap.</Text>}
    linktext={<Button borderRadius="10px" variant="solid" color="white" bg="main">Signup for free</Button>}
    to="/signup"
    DivDisplay="none"
    avtardisplay="none"
  />
);

export const BannerData2 = (
  <Banner
    src={Banner2}
    bg="blackAlpha.50"
    width={{ base: "max-content", md: "400px", lg: "500px", xl: "600px" }}
    wrap={{ base: "wrap-reverse", md: "nowrap", lg: "nowrap" }}
    heading="  Transform blog posts into videos with A.I."
    text={` Starting from a blank page is hard — and with Lumen5, you don’t have
          to. Our AI-powered technology helps you storyboard your ideas, fit
          your content to a layout, and find music and visuals that enhance
          your message. `}
    linktext="Get started for free →"
    desc=" “Lumen5 has enabled us to create more videos and drive more traffic,
          while having more time to invest in other projects.”"
    AvtarImg={Avtar}
    Fname="Drew Sykes,"
    Lname=" Social Media Director"
    Plogo={uName_logo}
    to="/signup"
  />
);

export const BannerData3 = (
  <Banner
    direction="row-reverse"
    src={Banner3}
    width={{ base: "max-content", md: "400px", lg: "500px", xl: "600px" }}
    wrap={{ base: "wrap-reverse", md: "nowrap", lg: "nowrap" }}
    heading="Content library with millions of stock photos & videos"
    text={` The Lumen5 media library gives you easy access to millions of
    photos, video clips, and audio files, so you always have the
    elements you need to create the perfect video. `}
    linktext="View plans →"
    desc=" “We promoted our downloadable study on top PPC skills for 2019 on
    social media using a short video created in Lumen5 in just 30
    minutes, and decreased cost per download by 5x!”"
    AvtarImg={Avtar2}
    Fname=" Julia Oleniova,"
    Lname="Manager"
    Plogo={cName_logo}
    to="/pricing"
  />
);

export const BannerData4 = (
  <Banner
    src={Banner4}
    bg="blackAlpha.50"
    width={{ base: "max-content", md: "400px", lg: "500px", xl: "600px" }}
    wrap={{ base: "wrap-reverse", md: "nowrap", lg: "nowrap" }}
    heading=" Making it easy to stay on brand"
    text={`It has never been easier to stay on brand. With Lumen5 templates,
    you can customize each video with your unique logo, watermark,
    fonts, colors, and more.`}
    linktext="Get Started for Free →"
    desc=" “Whenever I got in touch with Lumen5 I felt like my suggestions
    mattered and I was being listened to. It’s like I’m co-creating in a
    tiny way. It’s a great feeling.”"
    AvtarImg={Avtar3}
    Fname=" Promod Sharma,"
    Lname="Actuary & Insurance Consultant"
    Plogo={TName_logo}
    to="/signup"
  />
);

// enterprise Section

export const EnterpriseBanner1 = (
  <Banner
    src={enterprise1}
    width={{ base: "max-content", md: "400px", lg: "500px" }}
    wrap={{ base: "wrap-reverse", md: "nowrap", lg: "nowrap" }}
    boxbg="gray.800"
    Second_box="none"
    heading={
    <Heading as="p" color="white" fontSize={{ base: "25px", md: "30px", lg: "36px" }}> Create engaging videos at scale while keeping on brand.
      </Heading>}
    text={<Text color="white" as="span">
        Lumen5 is the easiest and fastest way to create videos with your own
        custom branded templates. Decentralize video creation on your teams with
        confidence.</Text> }
    linktext={<Button bg="main" variant="solid" color="white" borderRadius="20px">Join Enterprise </Button> }
    to="/enterprise"
    DivDisplay="none"
    avtardisplay="none"
  />
);

export const EnterpriseBanner2 = (
  <Banner
    src={enterprise2}
    bg="blackAlpha.50"
    imagepadding={{ base: "10px", md: "20px", lg: "0px" }}
    width={{ base: "max-content", md: "400px", lg: "500px", xl: "600px" }}
    wrap={{ base: "wrap-reverse", md: "nowrap", lg: "nowrap" }}
    heading= "Produce videos at scale and in‑house. Seriously easy."
    text={`Lumen5 is an unbelievably easy to use video creator built specifically for users without experience in video editing. The workflow is as simple as creating a PowerPoint presentation, and the output can be indistinguishable from professional agency-produced videos. You can create professional video from any text-based content and cut video creation time to an average of six minutes in Lumen5. Enable your global teams to produce localized content for their audience as well in a snap. Just don't tell your boss it was this easy.`}
    DivDisplay="none"
    avtardisplay="none"
  />
);
export const EnterpriseBanner3 = (
  <Banner
    direction="row-reverse"
    src={enterprise3}
    width={{ base: "max-content", md: "400px", lg: "500px", xl: "600px" }}
    wrap={{ base: "wrap-reverse", md: "nowrap", lg: "nowrap" }}
    imagepadding={{ base: "10px", md: "20px", lg: "0px" }}
    heading="Maintain full control over content and branding."
    text={`Our team of motion graphics designers work with your brand team to produce a custom template unique to your visual identity, ensuring your videos are always on-brand no matter who is creating them for you. With approval and permission level workflows in place, you can always make sure everyone's on the right path and on brand. Comment and leave revision requests right in the video itself, scene by scene, allowing for smooth team collaboration and a simple creation and video sharing process between team members, no matter if they're sitting next to you, or half a world away.`}
    DivDisplay="none"
    avtardisplay="none"
  />
);
export const EnterpriseBanner4 = (
  <Banner
    src={enterprise4}
    bg="blackAlpha.50"
    width={{ base: "max-content", md: "400px", lg: "500px", xl: "600px" }}
    wrap={{ base: "wrap-reverse", md: "nowrap", lg: "nowrap" }}
    imagepadding={{ base: "10px", md: "20px", lg: "0px" }}
    heading="Priority support, customer success, and continuous training."
    text={`Our strategic Customer Success team has worked with hundreds of brands on implementation and adoption. We have a strong track record of helping users across all departments of all enterprises become video creation experts. Paired with our easy-peasy UI and AI, your team will be pumping out expert eye catching videos in days. Onboarding is just the beginning. We'll team up with you throughout our partnership to offer video analysis, creative direction, and industry best practices to help you continuously push the boundaries of producing more effective video content that actually generates results and drives growth. We got you.`}
    DivDisplay="none"
    avtardisplay="none"
  />
);
