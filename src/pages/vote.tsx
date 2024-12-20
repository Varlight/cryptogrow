import type { NextPageWithLayout } from '@/types';
import { NextSeo } from 'next-seo';
import RootLayout from '@/layouts/_root-layout';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import routes from '@/config/routes';
import Image from '@/components/ui/image';
import cn from 'classnames';
// static data
import votePool from '@/assets/images/vote-pool.svg';
import discord from '@/assets/images/discord.svg';
import forum from '@/assets/images/forum.svg';
import bank from '@/assets/images/bank.svg';
import mirror from '@/assets/images/mirror.svg';
import { useLayout } from '@/lib/hooks/use-layout';
import { LAYOUT_OPTIONS } from '@/lib/constants';

const VotePage: NextPageWithLayout = () => {
  const router = useRouter();
  const { layout } = useLayout();
  return (
    <>
      <NextSeo
        title="Vote"
        description="Criptic - React Next Web3 NFT Crypto Dashboard Template"
      />
      <div className="mx-auto w-full max-w-[1160px] text-sm md:pt-14 4xl:pt-24">
        <div
          className={cn('grid ', {
            'grid-cols-1 gap-6 xs:grid-cols-2 lg:grid-cols-3':
              layout !== LAYOUT_OPTIONS.RETRO,
            'grid-cols-2 gap-6 xs:grid-cols-4 lg:grid-cols-6 3xl:grid-rows-1':
              layout === LAYOUT_OPTIONS.RETRO,
          })}
        >
          <motion.div
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.015 }}
            onClick={() => router.push(routes.proposals)}
            className={cn(
              'flex cursor-pointer flex-col items-center justify-center rounded-lg bg-white p-6 text-center shadow-card transition-shadow duration-200 hover:shadow-large dark:bg-light-dark',
              {
                'xs:col-span-2 sm:col-auto sm:row-span-2':
                  layout !== LAYOUT_OPTIONS.RETRO,
                'col-span-6 sm:row-span-4 md:row-span-1 3xl:col-span-2 3xl:row-span-2':
                  layout === LAYOUT_OPTIONS.RETRO,
              }
            )}
            style={{ margin: 'auto' }}
          >
            <div className="h-auto w-16 xs:w-20 xl:w-24 3xl:w-28 4xl:w-auto">
              <Image alt="Vote Pool" src={votePool} />
            </div>
            <h3 className="mt-6 mb-2 text-sm font-medium uppercase text-gray-800 dark:text-gray-100 sm:text-base 3xl:text-lg">
              Cast Your Vote
            </h3>
            <p className="leading-loose text-gray-600 dark:text-gray-400">
              Unleash the power of blockchain as you cast your vote —
              <br className="hidden xs:inline-block" /> a secure, transparent,
              and technologically advanced choice.
              <br className="hidden xs:inline-block" /> Embrace the future of
              voting with blockchain technology powered by XDC.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

VotePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default VotePage;
