import { useState, useEffect } from 'react';
import styles from './announcement.module.scss';
import { TextField } from '@mui/material';
import PageNation from '../PageNation/PageNation';

interface Announcement {
  id: number;
  tag: string;
  title: string;
  content: string;
  publication: string;
  selected: boolean;
  createddate: string;
  lastupdated: string;
}

export const EditForm = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [page, setPage] = useState<number>(1);
  const [fetchTrigger, setFetchTrigger] = useState<boolean>(false);
  const url = process.env.NEXT_PUBLIC_VERCEL_HOST;

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch(url+'get', {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          const sortedAnnouncements = data.sort((a: Announcement, b: Announcement) =>
            a.createddate.localeCompare(b.createddate)
          ).reverse();
          const announcementsWithSelection = sortedAnnouncements.map((announcement: Announcement) => ({
            ...announcement,
            selected: false,
          }));

          setAnnouncements(announcementsWithSelection);
        } else {
          console.error('Failed to fetch announcements:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
    };

    fetchAnnouncements();
  }, [fetchTrigger, url]);

  const handleCheckboxChange = (id: number) => {
    setAnnouncements((prevAnnouncements) =>
      prevAnnouncements.map((announcement) =>
        announcement.id === id ? { ...announcement, selected: !announcement.selected } : announcement
      )
    );
  };

  const handleUpdateSelected = async () => {
    try {
      const selectedAnnouncements = announcements.filter((announcement) => announcement.selected);

      if (selectedAnnouncements.length === 0) {
        alert('選択されたお知らせがありません。');
        return;
      };

      for (const announcement of selectedAnnouncements) {
        await fetch(url+'update', {
          method: 'PUT',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: announcement.id,
            tag: announcement.tag,
            title: announcement.title,
            content: announcement.content,
            publication: announcement.publication,
          }),
        });
      }

      setFetchTrigger(!fetchTrigger);
      handleDeselectAll();
      alert('更新しました。')

    } catch (error) {
      console.error('Error updating selected announcements:', error);
    }
  };

  const handleDeleteSelected = async () => {
    try {
      const selectedIds = announcements
        .filter((announcement) => announcement.selected)
        .map((announcement) => announcement.id);

      if (selectedIds.length === 0) {
        alert('選択されたお知らせがありません。');
        return;
      };

      await Promise.all(selectedIds.map((id) => deleteAnnouncement(id)));
      setFetchTrigger(!fetchTrigger);
      alert('削除しました。');
    } catch (error) {
      console.error('Error deleting selected announcements:', error);
    }
  };

  const deleteAnnouncement = async (id: number) => {
    try {
      await fetch(url+'delete', {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id }),
      });

      handleDeselectAll();
      setFetchTrigger(!fetchTrigger);
    } catch (error) {
      console.error(`Error deleting announcement with id ${id}:`, error);
    }
  };

  const handleSelectAll = () => {
    setAnnouncements((prevAnnouncements) =>
      prevAnnouncements.map((announcement) => ({
        ...announcement,
        selected: true,
      }))
    );
  };

  const handleDeselectAll = () => {
    setAnnouncements((prevAnnouncements) =>
      prevAnnouncements.map((announcement) => ({
        ...announcement,
        selected: false,
      }))
    );
  };

  const handleInputChange = (id: number, field: string, value: string) => {
    setAnnouncements((prevAnnouncements) =>
      prevAnnouncements.map((announcement) =>
        announcement.id === id ? { ...announcement, [field]: value } : announcement
      )
    );
  };

  return (
    <div className={styles.editContainer}>
      <div className={styles.buttonWrapper}>
        <button onClick={handleUpdateSelected}>更新</button>
        <button onClick={handleDeleteSelected}>削除</button>
        <button onClick={handleSelectAll}>全選択</button>
        <button onClick={handleDeselectAll}>選択解除</button>
      </div>
      {announcements.map((announcement) => (
        <div
          key={announcement.id}
          className={`
            ${styles.editAnnouncementContainer}
            ${announcement.selected ? styles.checked : ''}
          `}
        >
          <label className={styles.editInputLabel}>
            <input
              type="checkbox"
              checked={announcement.selected}
              onChange={() => handleCheckboxChange(announcement.id)}
            />
          </label>

          <div className={styles.editAnnouncementWrapper}>
            <div className={styles.date}>
              <div>
                <span className={styles.editAnnouncementSpan}>作成日時</span>
                <span>{new Date(announcement.createddate).toISOString().split('T')[0]}</span>
              </div>

              <div>
                <span className={styles.editAnnouncementSpan}>最終更新日時</span>
                <span>{new Date(announcement.lastupdated).toISOString().split('T')[0]}</span>
              </div>
            </div>

            <div className={styles.tagAndPub}>
              <div>
                <span className={styles.editAnnouncementSpan}>タグ</span>
                <TextField
                  className={styles.editTag}
                  type="text"
                  value={announcement.tag}
                  onChange={(e) => handleInputChange(announcement.id, 'tag', e.target.value)}
                />
              </div>

              <div>
                <span>公開可否</span>
                <select
                  value={announcement.publication}
                  onChange={(e) => handleInputChange(announcement.id, 'publication', e.target.value)}
                >
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>
            </div>

            <div className={styles.editTitleContainer}>
              <span className={styles.editAnnouncementSpan}>タイトル</span>
              <TextField
                className={styles.editTitle}
                type="text"
                value={announcement.title}
                onChange={(e) => handleInputChange(announcement.id, 'title', e.target.value)}
              />
            </div>

            <div className={styles.editContentContainer}>
              <span className={styles.editAnnouncementSpan}>内容</span>
              <TextField
                className={styles.editContent}
                type="text"
                multiline
                value={announcement.content}
                onChange={(e) => handleInputChange(announcement.id, 'content', e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}

      {/* <PageNation
        page={page}
        setPage={setPage}
        maxPage={sortedAnnounce.length}
      /> */}
    </div>
  );
};
