import Main from "../../layouts/main/Main";
import OffersSection from "../../layouts/offers-section/OffersSection";
import StorySection from "../../layouts/story-section/StorySection";
import BestSeller from "../../layouts/best-seller/BestSeller";
import Categories from "../../layouts/categories/Categories";

export default function Home() {
  return (
    <>
      <Main />
      <OffersSection />
      <StorySection />
      <BestSeller />
      <Categories />
    </>
  );
}
