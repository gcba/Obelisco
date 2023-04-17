import React, { PropsWithChildren } from 'react';

interface AccessOrganismsType {
  accessList?: AccessInfo[];
  categoryList?: CategoryList[];
  simpleComponent?: boolean;
}

export interface AccessInfo {
  title: string;
  description: string;
}
export interface CategoryList {
  title: string;
  items: string[];
}

export const AccessOrganisms: React.FC<AccessOrganismsType> = (props: PropsWithChildren<AccessOrganismsType>) => {
  const { accessList, categoryList, simpleComponent } = props;
  return (
    <div className="list-group">
      <div className="group-access">
        <div className="card-access">
          <div className={`card-access-body${simpleComponent ? ' reverse' : ''}`}>
            <div>
              <h4 className="mb-1">Título del acceso</h4>
              <p className="mb-0">Descripción del acceso</p>
            </div>
            {simpleComponent ? (
              <span className="card-access-icon material-icons-round">info</span>
            ) : (
              <span className="card-access-icon descriptive">N°</span>
            )}
          </div>
          {accessList && (
            <>
              <hr className="clearfix" />
              <div className="container-access">
                <div className="access-option">
                  {accessList.map((item, index) => (
                    <a key={index} href="#" className="list-group-item item-sm">
                      <i className="bx bxs-info-circle"></i>
                      <div className="access-content">
                        <span className="access-title">{item.title}</span>
                        <p className="access-text">{item.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <hr className="clearfix" />
            </>
          )}
          {categoryList && (
            <>
              <hr className="clearfix" />
              <div className="container-access">
                <div className="access-option">
                  {categoryList.map((category: CategoryList, index: number) => (
                    <React.Fragment key={index}>
                      <h5 className="title-option">{category.title}</h5>
                      {category.items.map((item: string, index: number) => (
                        <a key={index} href="#" className="list-group-item item-sm">
                          <span className="access-title">
                            <i className="bx bxs-info-circle"></i>
                            {item}
                          </span>
                        </a>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <hr className="clearfix" />
            </>
          )}
          <a href="#" className="list-group-item card-item">
            <span className="access-title">
              <i className="bx bxs-info-circle"></i>
              Acceso grande
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
