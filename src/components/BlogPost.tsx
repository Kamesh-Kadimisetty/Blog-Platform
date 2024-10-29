import React from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { Edit2, Trash2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface BlogPostProps {
  id: string;
  title: string;
  content: string;
  authorId: string;
  authorName: string;
  createdAt: Date;
  onDelete?: () => void;
}

export const BlogPost: React.FC<BlogPostProps> = ({
  id,
  title,
  content,
  authorId,
  authorName,
  createdAt,
  onDelete
}) => {
  const { currentUser } = useAuth();
  const isAuthor = currentUser?.uid === authorId;

  return (
    <article className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">
            <Link to={`/post/${id}`} className="hover:text-teal-600">
              {title}
            </Link>
          </h2>
          <div className="text-gray-600 text-sm">
            By {authorName} • {formatDistanceToNow(createdAt, { addSuffix: true })}
          </div>
        </div>
        {isAuthor && (
          <div className="flex space-x-2">
            <Link
              to={`/edit-post/${id}`}
              className="p-2 text-gray-600 hover:text-teal-600"
            >
              <Edit2 size={20} />
            </Link>
            {onDelete && (
              <button
                onClick={onDelete}
                className="p-2 text-gray-600 hover:text-red-600"
              >
                <Trash2 size={20} />
              </button>
            )}
          </div>
        )}
      </div>
      <p className="text-gray-700 line-clamp-3">{content}</p>
    </article>
  );
};