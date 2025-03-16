import Image from "next/image";

type ChallengesLearningProps = {
  challenges: string[];
  learnings: string[];
};

export default function ChallengesLearning({
  challenges,
  learnings,
}: ChallengesLearningProps) {
  return (
    <section className="bg-black-200">
      <div className="mx-auto flex max-w-[880px] flex-col gap-5 px-3 py-10">
        <p className="text-sm font-semibold text-white">Problem</p>
        <h2 className="text-2xl font-semibold text-white">
          Challenges & Learnings
        </h2>
        <div className="mb-5 p-5 bg-black-300">
          <h3 className="text-lg font-semibold uppercase text-orange-600">
            Challenges
          </h3>
          <div className="flex flex-col gap-5 pt-9">
            {challenges.map((c) => (
              <div key={c} className="flex gap-3">
                <Image
                  className="size-5"
                  src={"/assets/icons/challenge.svg"}
                  width={40}
                  height={40}
                  alt="icon"
                />
                <p className="text-sm text-white lg:text-lg">{c}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-5 p-5 bg-black-300">
          <h3 className="text-lg font-semibold uppercase text-orange-600">
            Learnings
          </h3>
          <div className="flex flex-col gap-5 pt-9">
            {learnings.map((c) => (
              <div key={c} className="flex gap-3">
                <Image
                  className="size-5"
                  src={"/assets/icons/check.svg"}
                  width={40}
                  height={40}
                  alt="icon"
                />
                <p className="text-sm text-white lg:text-lg">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
