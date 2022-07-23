const filterRepository = (data) => {
  const getLanguage = data.filter(({ language }) => language === 'C#');
  const getFiveRepo = getLanguage.slice(0, 5);
  const response = getFiveRepo.map((res) => ({
    title: res.name,
    subtitle: res.description,
    image: res.owner.avatar_url,
  }));

  return response;
};

module.exports = filterRepository;
