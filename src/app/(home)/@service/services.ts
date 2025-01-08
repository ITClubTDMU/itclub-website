import { TAppImageProps } from "@/components/ui/app-image";

const PATH_FOLDER_IMAGE = "/services";

type TService = {
  content?: string;
  title?: string;
  imageProps?: Omit<TAppImageProps, "src"> & {
    src: string;
  };
};

const services: TService[] = [
  {
    content:
      "CLB IT TDMU mang đến các buổi học, các buổi ôn tập chuyên môn và bài tập thực tế nhằm giúp các thành viên nâng cao kiến thức chuyên ngành và kỹ năng lập trình.",
    imageProps: {
      src: `${PATH_FOLDER_IMAGE}/cac_buoi_hoc.webp`,
      alt: "cac_buoi_hoc",
      sizes:
        "(min-width: 1320px) 385px, (min-width: 520px) calc(31.15vw - 21px), calc(33.5vw - 18px)",
    },
    title: "ÔN TẬP - RÈN LUYỆN",
  },
  {
    content:
      "Là cầu nối giúp các thành viên giao lưu, học hỏi từ các anh chị đi trước, thầy cô và những người có kinh nghiệm trong lĩnh vực công nghệ thông tin.",
    imageProps: {
      src: `${PATH_FOLDER_IMAGE}/giaoluu.webp`,
      alt: "giao luu anh chi",
      sizes:
        "(min-width: 1320px) 385px, (min-width: 520px) calc(31.15vw - 21px), calc(33.5vw - 18px)",
    },
    title: "GIAO LƯU - HỌC HỎI",
  },
  {
    content:
      "Tạo điều kiện ôn tập và rèn luyện, giúp thành viên tự tin tham gia các cuộc thi lập trình như Olympic Tin học, lập trình quốc tế ICPC, Hội thi lập trình sinh viên TDMU và nhiều sân chơi bổ ích khác.",
    imageProps: {
      src: `${PATH_FOLDER_IMAGE}/thiquocte.webp`,
      alt: "thi quoc te",
      sizes:
        "(min-width: 1320px) 385px, (min-width: 520px) calc(31.15vw - 21px), calc(32.5vw - 13px)",
    },
    title: "CƠ HỘI THI ĐẤU - CẠNH TRANH",
  },
];

export { services, type TService };
