const categoryList = document.querySelector("#categories");
const catItems = categoryList.querySelectorAll(".item");
console.log(`Number of categories: ${catItems.length}`);

catItems.forEach((item) => {
  const catTitle = item.querySelector("h2").textContent;
  const catElems = item.querySelectorAll("ul li").length;

  console.log(`Category: ${catTitle}`);
  console.log(`Elements: ${catElems}`);
});
