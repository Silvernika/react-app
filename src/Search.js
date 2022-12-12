import './Search.scss';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Search = ({ searchQuery, setSearchQuery }) => {
  const {t} = useTranslation();
  const navigate = useNavigate();
    const onSubmit = (e) => {
      // use only first word of search query
        const query = searchQuery.split(' ')[0];
        //english version
        if (query.toLowerCase() === 'levin' || query.toLowerCase() === 'левин') {
          navigate('/Levin');
        } else if (query.toLowerCase() === 'заборский' || query.toLowerCase() === 'zaborsky') {
          navigate('/Zaborsky');
        } else if (query.toLowerCase() === 'воинов' || query.toLowerCase() === 'voinov') {
          navigate('/Voinov');
        } else if (query.toLowerCase() === 'фомин' || query.toLowerCase() === 'fomin') {
          navigate('/Phomin');
        } else if (query.toLowerCase() === 'ананич' || query.toLowerCase() === 'ananich') {
          navigate('/Ananich');
        } else if (query.toLowerCase() === 'григорьев' || query.toLowerCase() === 'grigorev') {
          navigate('/Grigorev');
        } else {
        navigate(`../${query}`);
        }
        e.preventDefault();
    };
  return (
  <form action="/" method="get" className='Search' autoComplete="off" onSubmit={onSubmit}>
        <input
            value={searchQuery}
            onInput={(e) => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder={t('search.placeholder')}
            name="s"
            className='SearchInput' 
        />
        <button type="submit" className='SearchButton'>{t("search.button")}</button>
    </form>
  );
};

export default Search;