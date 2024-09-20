import React from "react";
import FilterButton from "./FilterButton";
const Marketplace = () => {
  return (
    <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl my-4 font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>
        <FilterButton />

        <div className="grid-cols-4 grid gap-8 my-8">
          <div class="mt-6  gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div class="group relative">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqzSHqPKuGm5nFs_mqkF0gAPMOrz6K5Iy5fUni2_B0gywnFP1"
                  alt="Front of men&#039;s Basic Tee in black."
                  class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      SugarCane
                    </a>
                  </h3>
                </div>
                <p class="text-sm font-medium text-gray-900">Rs 2000 / 100kg</p>
              </div>
            </div>
          </div>

          <div class="mt-6  gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div class="group relative">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="https://cdn.mos.cms.futurecdn.net/r5ibnDz656ibgejAdjWHaj-1200-80.jpg"
                  alt="Front of men&#039;s Basic Tee in black."
                  class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      StrawBerries
                    </a>
                  </h3>
                </div>
                <p class="text-sm font-medium text-gray-900">Rs 400 / 10Kg</p>
              </div>
            </div>
          </div>

          <div class="mt-6  gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div class="group relative">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-2hFPpa70y8btNDOXtwzJZizRRqB5sxolAw&s"
                  alt="Front of men&#039;s Basic Tee in black."
                  class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Mangoes
                    </a>
                  </h3>
                </div>
                <p class="text-sm font-medium text-gray-900">Rs 800 / Dozen</p>
              </div>
            </div>
          </div>

          <div class="mt-6  gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div class="group relative">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVym8Rbw02NvHstH3fumVAJqgNy961uHq-0w&s"
                  alt="Front of men&#039;s Basic Tee in black."
                  class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Lemons
                    </a>
                  </h3>
                </div>
                <p class="text-sm font-medium text-gray-900">Rs 100 / Kg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
