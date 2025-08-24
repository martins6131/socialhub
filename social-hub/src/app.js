const { useState, useEffect } = React;

const platforms = [
  { name: 'X', icon: '🐦', color: 'bg-blue-500' },
  { name: 'Facebook', icon: '📘', color: 'bg-blue-700' },
  { name: 'Instagram', icon: '📷', color: 'bg-pink-500' },
  { name: 'LinkedIn', icon: '💼', color: 'bg-blue-800' },
];

const SocialHub = () => {
  const [activePlatform, setActivePlatform] = useState(platforms[0].name);
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (postContent.trim()) {
      setPosts([...posts, { platform: activePlatform, content: postContent, id: Date.now() }]);
      setPostContent('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${isMobile ? 'fixed bottom-0 w-full flex-row' : 'w-20 md:w-64 flex-col'} 
          glass shadow-lg flex justify-around md:justify-start p-2 md:p-4`}
      >
        {platforms.map((platform) => (
          <button
            key={platform.name}
            onClick={() => setActivePlatform(platform.name)}
            className={\`p-3 rounded-xl my-1 flex items-center justify-center md:justify-start space-x-2 
              transition-all duration-200 hover:scale-105 \${activePlatform === platform.name ? platform.color + ' text-white shadow-md' : 'bg-white text-gray-700'}\`}
          >
            <span className="text-xl">{platform.icon}</span>
            {!isMobile && <span className="hidden md:inline font-medium">{platform.name}</span>}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-2xl mx-auto p-4 md:p-8">
        {/* Header */}
        <header className="sticky top-0 bg-gray-100 z-10 pb-4 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 animate-fade-in">
            {activePlatform} Feed
          </h1>
          <p className="text-gray-600">Share your thoughts, connect, and engage 🚀</p>
        </header>

        {/* Post Input */}
        <div className="mb-8 animate-slide-up bg-white rounded-2xl shadow-md p-4 border border-gray-200">
          <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder={\`What's on your mind on \${activePlatform}?\`}
            className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            rows="4"
          />
          <button
            onClick={handlePostSubmit}
            className="mt-3 px-5 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-200 shadow-md"
          >
            Post
          </button>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts
            .filter((post) => post.platform === activePlatform)
            .map((post) => (
              <div
                key={post.id}
                className="p-5 bg-white rounded-2xl shadow-lg border border-gray-200 animate-fade-in hover:shadow-xl transition-shadow duration-300"
              >
                <p className="text-gray-800 text-lg">{post.content}</p>
                <div className="mt-3 flex space-x-6 text-sm font-medium">
                  <button className="text-blue-500 hover:underline">👍 Like</button>
                  <button className="text-green-500 hover:underline">💬 Comment</button>
                  <button className="text-purple-500 hover:underline">🔗 Share</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SocialHub />);