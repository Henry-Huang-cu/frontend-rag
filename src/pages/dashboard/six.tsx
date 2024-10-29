import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import { ChatView } from 'src/sections/blank/chatroom';

import { BlankView } from 'src/sections/blank/view';

// ----------------------------------------------------------------------

const metadata = { title: `Page six | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ChatView title="RAG Chatbot 6" />
    </>
  );
}
