import { useState, useEffect } from 'react';
import styles from './announcement.module.scss';
import { TextField } from '@mui/material';

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
  const deleteUrl = '/api/deleteData';
  const getUrl = '/api/getData';

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await fetch(getUrl);
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
      for (const announcement of selectedAnnouncements) {
        await fetch(`/api/updateData`, {
          method: 'PUT',
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
      fetchAnnouncements();
      handleSelectAll();
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

      await Promise.all(selectedIds.map((id) => deleteAnnouncement(id)));
      fetchAnnouncements();
    } catch (error) {
      console.error('Error deleting selected announcements:', error);
    }
  };


  const deleteAnnouncement = async (id: number) => {
    try {
      await fetch(deleteUrl, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id }),
      });
    } catch (error) {
      console.error(`Error deleting announcement with id ${id}:`, error);
    }
  };


  const handleSelectAll = () => {
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
        <button onClick={handleSelectAll}>選択解除</button>
      </div>
      {announcements.map((announcement) => (
        <div
          key={announcement.id}
          className={styles.editAnnouncementContainer}
        >
          <label className={styles.editInput}>
            <input
              type="checkbox"
              checked={announcement.selected}
              onChange={() => handleCheckboxChange(announcement.id)}
            />
          </label>
          <div className={styles.editAnnouncementWrapper}>
            <tr>
              <th>作成日時</th>
              <td>{new Date(announcement.createddate).toISOString().split('T')[0]}</td>
            </tr>
            <tr>
              <th>最終更新日時</th>
              <td>{new Date(announcement.lastupdated).toISOString().split('T')[0]}</td>
            </tr>
            <tr>
              <th>タグ</th>
              <td>
                <input
                  className={styles.editTag}
                  type="text"
                  value={announcement.tag}
                  onChange={(e) => handleInputChange(announcement.id, 'tag', e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>タイトル</th>
              <td>
                <input
                  className={styles.editTitle}
                  type="text"
                  value={announcement.title}
                  onChange={(e) => handleInputChange(announcement.id, 'title', e.target.value)}
                />
              </td>
            </tr>
            <tr className={styles.editContentContainer}>
              <th>内容</th>
              <td>
                <TextField
                  className={styles.editContent}
                  type="text"
                  multiline
                  value={announcement.content}
                  onChange={(e) => handleInputChange(announcement.id, 'content', e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>公開可否</th>
              <td>
                <select
                  value={announcement.publication}
                  onChange={(e) => handleInputChange(announcement.id, 'publication', e.target.value)}
                >
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </td>
            </tr>
          </div>
        </div>
      ))}
    </div>
  );
};
